declare module 'intl-tel-input' {
  interface CountryData {
    iso2: string;
    dialCode: string;
    name: string;
  }

  interface IntlTelInputInstance {
    getNumber(): string;
    getSelectedCountryData(): CountryData;
    setCountry(country: string): void;
    destroy(): void;
  }

  interface IntlTelInputOptions {
    preferredCountries?: string[];
    autoPlaceholder?: string;
    initialCountry?: string;
    geoIpLookup?: (callback: (countryCode: string) => void) => void;
    separateDialCode?: boolean;
    nationalMode?: boolean;
    utilsScript?: string;
    placeholderNumberType?: string;
  }

  function intlTelInput(
    input: HTMLInputElement,
    options?: IntlTelInputOptions
  ): IntlTelInputInstance;

  export default intlTelInput;
}
