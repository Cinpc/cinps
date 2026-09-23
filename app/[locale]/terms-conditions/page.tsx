import HomeHero from '@/app/[locale]/(home)/HomeHero';
import TermsContent from '@/app/[locale]/terms-conditions/components/TermsContent';
import { termsConditions } from '@/data/terms-conditions';

export default function termsConditionsPage() {
  return (
    <>
      <HomeHero
        title="Terms and Conditions"
        imageSrc="/terms-conditions/hero.png"
        imageSrcMobile="/terms-conditions/hero-mobile.png"
        contentClassName="max-md:min-h-113"
        cardClassName="max-w-163.25"
      />
      <TermsContent sections={termsConditions} />
    </>
  );
}
