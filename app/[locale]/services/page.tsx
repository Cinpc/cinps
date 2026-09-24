import { getTranslations } from 'next-intl/server';
import { getPageMetadata } from '@/i18n/metadata';
import HomeHero from '@/app/[locale]/(home)/HomeHero';
import HomeOneTeam from '@/app/[locale]/(home)/HomeOneTeam';
import ServicesDecide from '@/app/[locale]/services/components/ServicesDecide';
import ServicesBuiltAround from '@/app/[locale]/services/components/ServicesBuiltAround';
import HomeHaveMore from '@/app/[locale]/services/components/ServicesHaveMore';
import ServicesCustomerJourney from '@/app/[locale]/services/components/ServicesCustomerJourney';
import { contactFormHref } from '@/data/contact';

export function generateMetadata() {
  return getPageMetadata('services');
}

const teamItems = [
  { key: 'compliance', icon: '/icons/lifebuoy.svg' },
  { key: 'collections', icon: '/icons/headset.svg' },
  { key: 'customerCare', icon: '/icons/credit-card-reader.svg' },
  { key: 'fraud', icon: '/icons/triangle-alert.svg' },
  { key: 'application', icon: '/icons/sticky-note-check.svg' },
  { key: 'complaint', icon: '/icons/file-user.svg' },
] as const;

export default async function ServicesPage() {
  const tHero = await getTranslations('ServicesHero');
  const tTeam = await getTranslations('ServicesTeam');
  const tItems = await getTranslations('HomeOneTeam');

  return (
    <>
      <HomeHero
        title={tHero('title')}
        description={tHero('description')}
        imageSrc="/services/services-hero.png"
        imageSrcMobile="/services/services-hero-mobile.png"
        buttonText={tHero('button')}
        buttonHref={contactFormHref}
        contentClassName="max-md:min-h-138.5"
      />
      <HomeOneTeam
        sectionClassName="bg-white"
        title={tTeam('title')}
        items={teamItems.map((item) => ({
          icon: item.icon,
          title: tItems(`${item.key}.title`),
          description: tItems(`${item.key}.description`),
        }))}
      />
      <ServicesCustomerJourney />
      <ServicesDecide />
      <ServicesBuiltAround />
      <HomeHaveMore />
    </>
  );
}
