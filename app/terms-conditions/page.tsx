import HomeHero from '@/app/(home)/HomeHero';
import TermsContent from '@/app/terms-conditions/components/TermsContent';
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
