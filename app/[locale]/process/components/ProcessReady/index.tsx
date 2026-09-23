import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import Title from '@/components/Title';
import Description from '@/components/Description';

export default function ProcessReady() {
  return (
    <section className="relative z-1 min-h-167.75 md:min-h-103 max-md:mx-2 max-md:rounded-2xl">
      <Card className="max-w-137 absolute bottom-17 md:bottom-21 right-2 md:right-75 max-xl:right-25 max-md:left-2">
        <Title
          variant="purple"
          className="mb-4 leading-[142.857%] lg:leading-[140.625%]"
        >
          Ready to Map What Moves?
        </Title>
        <Description className="mb-8" size="17">
          Show us what is currently taking up your team&apos;s time, and
          we&apos;ll start by defining what Cinpc can take over.
        </Description>

        <Button render={<Link href={'/company'} />}>Explore Services</Button>
      </Card>
      <Image
        src="/process/ready.png"
        fill
        alt="Image"
        className="object-cover -z-1 max-md:hidden"
      />
      <Image
        src="/process/ready-mobile.png"
        fill
        alt="Image"
        className="object-cover -z-1 md:hidden object-top rounded-[inherit]"
      />
    </section>
  );
}
