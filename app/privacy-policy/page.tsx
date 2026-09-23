import HomeHero from '@/app/(home)/HomeHero';
import TermsContent from '@/app/terms-conditions/components/TermsContent';
import { privacyPolicy } from '@/data/privacy-policy';

export default function privacyPolicyPage() {
  return (
    <>
      <HomeHero
        title="Privacy Policy"
        imageSrc="/terms-conditions/hero.png"
        imageSrcMobile="/terms-conditions/hero-mobile.png"
        contentClassName="max-md:min-h-113"
        cardClassName="max-w-163.25"
      />
      <TermsContent sections={privacyPolicy} />
    </>
  );
}
