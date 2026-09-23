import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import Title from '@/components/Title';
import Description from '@/components/Description';

export default function ContactNotSure() {
  return (
    <section className="relative z-1 min-h-174.25 md:min-h-127.25 max-md:rounded-2xl max-md:mx-2">
      <Card className="max-w-137 absolute max-md:bottom-4 md:top-21 xl:right-75 max-xl:right-45 max-md:right-2 max-md:left-2">
        <Title variant="purple" className="mb-4">
          Not Sure What to Outsource Yet?
        </Title>
        <Description className="mb-8" size="17">
          You don&apos;t need a finished plan before contacting us. Tell us
          where customer communication is taking up too much time, and
          we&apos;ll help define what can move outside your internal team.
        </Description>

        <Button render={<Link href={'/services'} />}>Explore Services</Button>
      </Card>
      <Image
        src="/contact/not-sure.png"
        fill
        alt="Image"
        sizes="100vw"
        className="object-cover -z-1 max-md:hidden"
      />
      <Image
        src="/contact/not-sure-mobile.png"
        fill
        alt="Image"
        sizes="calc(100vw - 16px)"
        className="object-cover -z-1 md:hidden object-top rounded-[inherit]"
      />
    </section>
  );
}
