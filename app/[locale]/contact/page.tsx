import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getPageMetadata } from '@/i18n/metadata';
import HomeHero from '@/app/[locale]/(home)/HomeHero';
import ContactStartConversation from '@/app/[locale]/contact/components/ContactStartConversation';
import ContactWhatHappens from '@/app/[locale]/contact/components/ContactWhatHappens';
import ContactNotSure from '@/app/[locale]/contact/components/ContactNotSure';

export function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('contact');
}

export default async function ContactPage() {
  const t = await getTranslations('ContactHero');

  return (
    <>
      <HomeHero
        title={t('title')}
        description={t('description')}
        imageSrc="/contact/hero.png"
        imageSrcMobile="/contact/hero-mobile.png"
        contentClassName="max-md:min-h-172.5"
        cardClassName="max-w-163.25"
      />
      <ContactStartConversation />
      <ContactWhatHappens />
      <ContactNotSure />
    </>
  );
}
