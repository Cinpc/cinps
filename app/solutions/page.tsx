import type { Metadata } from 'next';
import HomeHero from '@/app/(home)/HomeHero';
import SolutionsBuiltFor from '@/app/solutions/components/SolutionsBuiltFor';
import SolutionsDifferentBusiness from '@/app/solutions/components/SolutionsDifferentBusiness';
import SolutionsFits from '@/app/solutions/components/SolutionsFits';
import SolutionsKeepCore from '@/app/solutions/components/SolutionsKeepCore';
import SolutionsNeedSetup from '@/app/solutions/components/SolutionsNeedSetup';

export const metadata: Metadata = {
  title: 'Call Center Solutions for Financial Services | Cinpc',
  description:
    'Explore outsourced call center solutions for FinTech, lending, insurance, and financial services businesses with Cinpc.',
};

export default function SolutionsPage() {
  return (
    <>
      <HomeHero
        title="Support Built Around Financial Customer Journeys"
        description="Different financial businesses create different customer conversations. Cinpc adapts outsourced support around the operation behind them."
        imageSrc="/solutions/hero.png"
        imageSrcMobile="/solutions/hero-mobile.png"
        buttonText="Discuss Your Needs"
        buttonHref="/contact"
        contentClassName="max-md:min-h-140.5"
        cardClassName="max-w-181"
      />
      <SolutionsBuiltFor />
      <SolutionsDifferentBusiness />
      <SolutionsFits />
      <SolutionsKeepCore />
      <SolutionsNeedSetup />
    </>
  );
}
