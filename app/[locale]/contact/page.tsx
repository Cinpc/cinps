import type { Metadata } from 'next';
import HomeHero from '@/app/[locale]/(home)/HomeHero';
import ContactStartConversation from '@/app/[locale]/contact/components/ContactStartConversation';
import ContactWhatHappens from '@/app/[locale]/contact/components/ContactWhatHappens';
import ContactNotSure from '@/app/[locale]/contact/components/ContactNotSure';

export const metadata: Metadata = {
  title: 'Contact Cinpc | Call Center Outsourcing Services',
  description:
    'Contact Cinpc to discuss your call center outsourcing needs, customer operations, workflows, expected volumes, and required support.',
};

export default function ContactPage() {
  return (
    <>
      <HomeHero
        title="Tell Us What Needs to Leave Your Queue"
        description="Give us the basics, and we’ll start from there."
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
