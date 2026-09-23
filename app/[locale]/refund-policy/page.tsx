import HomeHero from '@/app/[locale]/(home)/HomeHero';
import TermsContent from '@/app/[locale]/terms-conditions/components/TermsContent';
import { refundPolicy } from '@/data/refund-policy';

export default function refundPolicyPage() {
  return (
    <>
      <HomeHero
        title="Refund Policy"
        imageSrc="/terms-conditions/hero.png"
        imageSrcMobile="/terms-conditions/hero-mobile.png"
        contentClassName="max-md:min-h-113"
        cardClassName="max-w-163.25"
      />
      <TermsContent sections={refundPolicy} />
    </>
  );
}
