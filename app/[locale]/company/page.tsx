import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getPageMetadata } from '@/i18n/metadata';
import HomeHero from '@/app/[locale]/(home)/HomeHero';
import CompanyAbout from '@/app/[locale]/company/component/CompanyAbout';
import CompanyCloseEnough from '@/app/[locale]/company/component/CompanyCloseEnough';
import CompanyFocused from '@/app/[locale]/company/component/CompanyFocused';
import CompanyPeopleBehind from '@/app/[locale]/company/component/CompanyPeopleBehind';
import CompanyLetsTalk from '@/app/[locale]/company/component/CompanyLetsTalk';
import { contactFormHref } from '@/data/contact';

export function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('company');
}

export default async function CompanyPage() {
  const t = await getTranslations('CompanyHero');

  return (
    <>
      <HomeHero
        title={t('title')}
        description={t('description')}
        imageSrc="/company/hero.png"
        imageSrcMobile="/company/hero-mobile.png"
        buttonText={t('button')}
        buttonHref={contactFormHref}
        contentClassName="max-md:min-h-140.5"
        cardClassName="max-w-181"
      />
      <CompanyAbout />
      <CompanyCloseEnough />
      <CompanyFocused />
      <CompanyPeopleBehind />
      <CompanyLetsTalk />
    </>
  );
}
