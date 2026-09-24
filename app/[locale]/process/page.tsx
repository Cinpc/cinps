import { getTranslations } from 'next-intl/server';
import { getPageMetadata } from '@/i18n/metadata';
import HomeHero from '@/app/[locale]/(home)/HomeHero';
import ProcessGetStarted from '@/app/[locale]/process/components/ProcessGetStarted';
import ProcessClearLines from '@/app/[locale]/process/components/ProcessClearLines';
import ProcessYourWorkflow from '@/app/[locale]/process/components/ProcessYourWorkflow';
import ProcessBuilt from '@/app/[locale]/process/components/ProcessBuilt';
import ProcessReady from '@/app/[locale]/process/components/ProcessReady';
import { contactFormHref } from '@/data/contact';

export function generateMetadata() {
  return getPageMetadata('process');
}

export default async function ProcessPage() {
  const t = await getTranslations('ProcessHero');

  return (
    <>
      <HomeHero
        title={t('title')}
        description={t('description')}
        imageSrc="/process/hero.png"
        imageSrcMobile="/process/hero-mobile.png"
        buttonText={t('button')}
        buttonHref={contactFormHref}
        contentClassName="max-md:min-h-112.5"
        cardClassName="max-w-181"
      />
      <ProcessGetStarted />
      <ProcessClearLines />
      <ProcessYourWorkflow />
      <ProcessBuilt />
      <ProcessReady />
    </>
  );
}
