import HomeHero from '@/app/(home)/HomeHero';
import CompanyAbout from '@/app/company/component/CompanyAbout';
import CompanyCloseEnough from '@/app/company/component/CompanyCloseEnough';
import CompanyFocused from '@/app/company/component/CompanyFocused';
import CompanyPeopleBehind from '@/app/company/component/CompanyPeopleBehind';
import CompanyLetsTalk from '@/app/company/component/CompanyLetsTalk';

export default function CompanyPage() {
  return (
    <>
      <HomeHero
        title="Built to Take Customer Operations Off Your Plate"
        description="Cinpc is a call center outsourcing partner for financial businesses that need more capacity without adding another internal function."
        imageSrc="/company/hero.png"
        imageSrcMobile="/company/hero-mobile.png"
        buttonText="Discuss Your Needs"
        buttonHref="/contact"
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
