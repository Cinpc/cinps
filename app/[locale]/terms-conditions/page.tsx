import { getLocale, getTranslations } from 'next-intl/server';
import HomeHero from '@/app/[locale]/(home)/HomeHero';
import TermsContent from '@/app/[locale]/terms-conditions/components/TermsContent';
import { getTermsConditions } from '@/data/terms-conditions';

export default async function termsConditionsPage() {
  const locale = await getLocale();
  const t = await getTranslations('TermsHero');

  return (
    <>
      <HomeHero
        title={t('title')}
        imageSrc="/terms-conditions/hero.png"
        imageSrcMobile="/terms-conditions/hero-mobile.png"
        contentClassName="max-md:min-h-113"
        cardClassName="max-w-163.25"
      />
      <TermsContent sections={getTermsConditions(locale)} />
    </>
  );
}
