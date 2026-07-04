import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import { geoIpLookup } from '../../lib/api';

export interface PhoneInputHandle {
  getNumber: () => string;
  getCountryCode: () => string;
}

interface PhoneInputProps {
  id?: string;
  placeholder?: string;
  className?: string;
  onChange?: (number: string, country: string) => void;
  onReady?: (iti: ReturnType<typeof intlTelInput>) => void;
  name?: string;
  required?: boolean;
}

export const PhoneInput = forwardRef<PhoneInputHandle, PhoneInputProps>(
  function PhoneInput({ id, placeholder, className, onChange, onReady, name, required }, ref) {
    const inputRef = useRef<HTMLInputElement>(null);
    const itiRef = useRef<ReturnType<typeof intlTelInput> | null>(null);

    useImperativeHandle(ref, () => ({
      getNumber: () => itiRef.current?.getNumber() || inputRef.current?.value || '',
      getCountryCode: () => itiRef.current?.getSelectedCountryData()?.iso2 || '',
    }));

    useEffect(() => {
      const input = inputRef.current;
      if (!input) return;

      const init = async () => {
        try {
          const iti = intlTelInput(input, {
            preferredCountries: ['ae'],
            autoPlaceholder: 'off',
            initialCountry: 'auto',
            geoIpLookup,
            separateDialCode: true,
            nationalMode: false,
            utilsScript: '',
          });

          itiRef.current = iti;
          onReady?.(iti);

          const sync = () => {
            const num = iti.getNumber();
            const country = iti.getSelectedCountryData()?.iso2 || '';
            if (onChange) onChange(num, country);
          };

          input.addEventListener('input', sync);
          input.addEventListener('countrychange', sync);

          // Sync initial
          setTimeout(() => {
            ensurePadding(input);
            sync();
          }, 0);
          setTimeout(() => ensurePadding(input), 300);
        } catch {
          // Fallback: plain input if ITI fails
        }
      };

      init();

      return () => {
        if (itiRef.current) {
          itiRef.current.destroy();
          itiRef.current = null;
        }
      };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const ensurePadding = (input: HTMLInputElement) => {
      const container = input.closest('.iti');
      if (!container) return;
      const flagBox = container.querySelector('.iti__flag-container') as HTMLElement | null;
      if (!flagBox) return;
      input.style.paddingLeft = `${flagBox.offsetWidth + 10}px`;
    };

    return (
      <input
        ref={inputRef}
        type="tel"
        id={id}
        className={className}
        data-phone-input
        name={name}
        required={required}
        placeholder={placeholder}
        style={{
          width: '100%',
          display: 'block',
        }}
      />
    );
  }
);
