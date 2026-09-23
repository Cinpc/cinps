import type { Metadata } from 'next';
import HomeHero from '@/app/[locale]/(home)/HomeHero';
import CompanyAbout from '@/app/[locale]/company/component/CompanyAbout';
import CompanyCloseEnough from '@/app/[locale]/company/component/CompanyCloseEnough';
import CompanyFocused from '@/app/[locale]/company/component/CompanyFocused';
import CompanyPeopleBehind from '@/app/[locale]/company/component/CompanyPeopleBehind';
import CompanyLetsTalk from '@/app/[locale]/company/component/CompanyLetsTalk';

export const metadata: Metadata = {
  title: 'Financial Call Center Outsourcing Company | Cinpc',
  description:
    'Learn about Cinpc, a call center outsourcing company providing customer and operational support for businesses across the financial sector.',
};

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
