import { getTranslations } from 'next-intl/server';
import { getPageMetadata } from '@/i18n/metadata';
import HomeHero from '@/app/[locale]/(home)/HomeHero';
import SolutionsBuiltFor from '@/app/[locale]/solutions/components/SolutionsBuiltFor';
import SolutionsDifferentBusiness from '@/app/[locale]/solutions/components/SolutionsDifferentBusiness';
import SolutionsFits from '@/app/[locale]/solutions/components/SolutionsFits';
import SolutionsKeepCore from '@/app/[locale]/solutions/components/SolutionsKeepCore';
import SolutionsNeedSetup from '@/app/[locale]/solutions/components/SolutionsNeedSetup';
import { contactFormHref } from '@/data/contact';

export function generateMetadata() {
  return getPageMetadata('solutions');
}

export default async function SolutionsPage() {
  const t = await getTranslations('SolutionsHero');

  return (
    <>
      <HomeHero
        title={t('title')}
        description={t('description')}
        imageSrc="/solutions/hero.png"
        imageSrcMobile="/solutions/hero-mobile.png"
        buttonText={t('button')}
        buttonHref={contactFormHref}
        contentClassName="max-md:min-h-140.5"
        cardClassName="max-w-185"
      />
      <SolutionsBuiltFor />
      <SolutionsDifferentBusiness />
      <SolutionsFits />
      <SolutionsKeepCore />
      <SolutionsNeedSetup />
    </>
  );
}
