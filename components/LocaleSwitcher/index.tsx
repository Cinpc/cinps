'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { locales, type Locale } from '@/i18n/config';
import { getPathname, usePathname } from '@/i18n/navigation';

const flags: Record<Locale, string> = {
  en: '/icons/en-lang.svg',
  es: '/icons/es-lang.svg',
};

export default function LocaleSwitcher({
  className = 'flex items-center gap-2 p-0 cursor-pointer border-0 bg-transparent',
}: {
  className?: string;
}) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const otherLocales = locales.filter((item) => item !== locale);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  function selectLocale(next: Locale) {
    setOpen(false);
    window.location.assign(
      getPathname({ href: pathname, locale: next, forcePrefix: true }),
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={className}
        aria-label="Language"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <Image src={flags[locale]} alt="Icon" width={24} height={16} />
        <Image src="/icons/caret-down.svg" alt="" width={16} height={16} />
      </button>

      {open ? (
        <ul className="absolute left-0 mt-4 z-50">
          {otherLocales.map((item) => (
            <li key={item}>
              <button
                type="button"
                className="flex cursor-pointer items-center border-0 bg-transparent"
                onClick={() => selectLocale(item)}
                aria-label={item.toUpperCase()}
              >
                <Image src={flags[item]} alt="" width={24} height={16} />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
