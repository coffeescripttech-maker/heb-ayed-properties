import { config } from '../config';
import type { LeadPayload, LeadResponse } from '../types';

export interface MarketingParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  utm_id?: string;
  referral_code?: string;
  [key: string]: string | undefined;
}

export function getMarketingParams(): MarketingParams {
  const params: MarketingParams = {};
  const sp = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id'] as const;
  utmKeys.forEach((k) => {
    const v = sp.get(k);
    if (v) params[k] = v;
  });
  const ref = sp.get('referral_code');
  if (ref) params.referral_code = ref;
  return params;
}

export interface GeoIpResult {
  country_code?: string;
}

export function geoIpLookup(callback: (countryCode: string) => void): void {
  const base = config.crmBase.replace(/\/$/, '');
  fetch(`${base}/get-ip-country`, { mode: 'cors' })
    .then((r) => r.json())
    .then((data: GeoIpResult) => {
      const code = (data.country_code || 'ae').toLowerCase();
      callback(code);
    })
    .catch(() => {
      callback('ae');
    });
}

export async function submitLead(payload: LeadPayload, locale: 'ar' | 'en'): Promise<LeadResponse> {
  const body = {
    key: config.apiKey,
    source: config.source[locale] || 'Alaainvest',
    ...getMarketingParams(),
    ...payload,
  };

  const res = await fetch(config.apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  });

  const data: LeadResponse = await res.json();
  if (!res.ok) throw data;
  return data;
}

export function redirectToThankYou(leadId?: number | null, locale: 'ar' | 'en' = 'ar') {
  if (leadId != null) {
    try {
      sessionStorage.setItem('pending_lead_id', String(leadId));
      sessionStorage.removeItem('qualification_goal');
    } catch { /* noop */ }
  }
  const path = config.thankYou[locale] || '/thank-you';
  const url = new URL(path, window.location.origin);
  const utm = getMarketingParams();
  Object.entries(utm).forEach(([k, v]) => {
    if (v && !url.searchParams.has(k)) url.searchParams.set(k, v);
  });
  window.location.href = url.toString();
}
