import type { Metadata } from 'next';
import HomeHero from '@/app/[locale]/(home)/HomeHero';
import HomeOneTeam from '@/app/[locale]/(home)/HomeOneTeam';
import ServicesDecide from '@/app/[locale]/services/components/ServicesDecide';
import ServicesBuiltAround from '@/app/[locale]/services/components/ServicesBuiltAround';
import HomeHaveMore from '@/app/[locale]/services/components/ServicesHaveMore';
import ServicesCustomerJourney from '@/app/[locale]/services/components/ServicesCustomerJourney';

export const metadata: Metadata = {
  title: 'Financial Call Center Outsourcing Services | Cinpc',
  description:
    'Explore Cinpc financial BPO services, including customer care, collections, compliance, application, fraud, and complaint support.',
};

export default function ServicesPage() {
  return (
    <>
      <HomeHero
        title="Customer Operations You Can Move Off Your Team"
        description="Cinpc handles recurring customer and operational work for businesses across the financial sector."
        imageSrc="/services/services-hero.png"
        imageSrcMobile="/services/services-hero-mobile.png"
        buttonText="Discuss Your Needs"
        buttonHref="/contact"
        contentClassName="max-md:min-h-138.5"
      />
      <HomeOneTeam
        sectionClassName="bg-white p-0 mb-16"
        title="Financial BPO Services"
        items={[
          {
            icon: '/icons/lifebuoy.svg',
            title: 'Compliance Support',
            description:
              'Support customer-facing processes around your established requirements and procedures.',
          },
          {
            icon: '/icons/headset.svg',
            title: 'Collections Support',
            description:
              'Keep payment reminders and collection-related follow-ups moving.',
          },
          {
            icon: '/icons/credit-card-reader.svg',
            title: 'Customer Care',
            description:
              'Handle everyday questions, requests, and account-related concerns.',
          },
          {
            icon: '/icons/triangle-alert.svg',
            title: 'Fraud Support',
            description:
              'Support communication around suspicious activity, verification, and further review.',
          },
          {
            icon: '/icons/sticky-note-check.svg',
            title: 'Application Support',
            description:
              'Guide customers through applications, information requests, and next steps.',
          },
          {
            icon: '/icons/file-user.svg',
            title: 'Complaint Handling',
            description:
              'Keep complaints moving through response, follow-up, and escalation.',
          },
        ]}
      />
      <ServicesCustomerJourney />
      <ServicesDecide />
      <ServicesBuiltAround />
      <HomeHaveMore />
    </>
  );
}
