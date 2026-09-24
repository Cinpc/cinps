import { getLocale, getTranslations } from 'next-intl/server';
import HomeHero from '@/app/[locale]/(home)/HomeHero';
import TermsContent from '@/app/[locale]/terms-conditions/components/TermsContent';
import { getRefundPolicy } from '@/data/refund-policy';

export default async function refundPolicyPage() {
  const locale = await getLocale();
  const t = await getTranslations('RefundHero');

  return (
    <>
      <HomeHero
        title={t('title')}
        imageSrc="/terms-conditions/hero.png"
        imageSrcMobile="/terms-conditions/hero-mobile.png"
        contentClassName="max-md:min-h-113"
        cardClassName="max-w-163.25"
      />
      <TermsContent sections={getRefundPolicy(locale)} />
    </>
  );
}
