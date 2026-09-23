import HomeHero from '@/app/(home)/HomeHero';
import ContactStartConversation from '@/app/contact/components/ContactStartConversation';
import ContactWhatHappens from '@/app/contact/components/ContactWhatHappens';
import ContactNotSure from '@/app/contact/components/ContactNotSure';

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
