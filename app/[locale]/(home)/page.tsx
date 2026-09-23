import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HomeHero from '@/app/[locale]/(home)/HomeHero';
import HomeCallCenter from '@/app/[locale]/(home)/HomeCallCenter';
import HomeOneTeam from '@/app/[locale]/(home)/HomeOneTeam';
import HomeLessPressure from '@/app/[locale]/(home)/HomeLessPressure';
import HomeVoiceCustomers from '@/app/[locale]/(home)/HomeVoiceCustomers';
import HomeHaveCalls from '@/app/[locale]/(home)/HomeHaveCalls';
import HomeClearProcess from '@/app/[locale]/(home)/HomeClearProcess';
import HomeBuiltFor from '@/app/[locale]/(home)/HomeBuiltFor';

export const metadata: Metadata = {
  title: 'Call Center Outsourcing Services | Cinpc',
  description:
    'Outsource customer support and financial BPO operations with Cinpc. Get flexible call center support built around your business workflows.',
};

const teamItems = [
  { key: 'compliance', icon: '/icons/lifebuoy.svg' },
  { key: 'collections', icon: '/icons/headset.svg' },
  { key: 'customerCare', icon: '/icons/credit-card-reader.svg' },
  { key: 'fraud', icon: '/icons/triangle-alert.svg' },
  { key: 'application', icon: '/icons/sticky-note-check.svg' },
  { key: 'complaint', icon: '/icons/file-user.svg' },
] as const;

export default async function Home() {
  const tHero = await getTranslations('HomeHero');
  const tTeam = await getTranslations('HomeOneTeam');

  return (
    <>
      <HomeHero
        sectionClassName="md:mb-10"
        title={tHero('title')}
        description={tHero('description')}
        imageSrc="/home/home-hero.png"
        imageSrcMobile="/home/home-hero-mobile.png"
        buttonText={tHero('button')}
        buttonHref="/contact"
        contentClassName="min-h-188 max-md:min-h-220.5"
        cardClassName="max-md:bottom-3"
      />
      <HomeCallCenter />
      <HomeOneTeam
        title={tTeam('title')}
        description={tTeam('description')}
        buttonText={tTeam('button')}
        buttonHref="/services"
        items={teamItems.map((item) => ({
          icon: item.icon,
          title: tTeam(`${item.key}.title`),
          description: tTeam(`${item.key}.description`),
        }))}
      />
      <HomeLessPressure />
      <HomeBuiltFor />
      <HomeClearProcess />
      <HomeVoiceCustomers />
      <HomeHaveCalls />
    </>
  );
}
