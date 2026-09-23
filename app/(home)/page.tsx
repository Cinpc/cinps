import type { Metadata } from 'next';
import HomeHero from '@/app/(home)/HomeHero';
import HomeCallCenter from '@/app/(home)/HomeCallCenter';
import HomeOneTeam from '@/app/(home)/HomeOneTeam';
import HomeLessPressure from '@/app/(home)/HomeLessPressure';
import HomeVoiceCustomers from '@/app/(home)/HomeVoiceCustomers';
import HomeHaveCalls from '@/app/(home)/HomeHaveCalls';
import HomeClearProcess from '@/app/(home)/HomeClearProcess';
import HomeBuiltFor from '@/app/(home)/HomeBuiltFor';

export const metadata: Metadata = {
  title: 'Call Center Outsourcing Services | Cinpc',
  description:
    'Outsource customer support and financial BPO operations with Cinpc. Get flexible call center support built around your business workflows.',
};

export default function Home() {
  return (
    <>
      <HomeHero
        sectionClassName="md:mb-10"
        title="Give Every Call Somewhere to Go"
        description="When customer calls start competing with the work your team was actually hired to do, Cinpc takes them off the queue."
        imageSrc="/home/home-hero.png"
        imageSrcMobile="/home/home-hero-mobile.png"
        buttonText="Discuss Your Needs"
        buttonHref="/contact"
        contentClassName="min-h-188 max-md:min-h-220.5"
        cardClassName="max-md:bottom-3"
      />
      <HomeCallCenter />
      <HomeOneTeam
        title="One Team for the Conversations You Need Covered"
        description="Move recurring customer communication and support tasks outside your internal team."
        buttonText="Explore Services"
        buttonHref="/services"
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
      <HomeLessPressure />
      <HomeBuiltFor />
      <HomeClearProcess />
      <HomeVoiceCustomers />
      <HomeHaveCalls />
    </>
  );
}
