import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Title from '@/components/Title';
import Description from '@/components/Description';

export default function CompanyFocused() {
  return (
    <section className="relative z-1 min-h-199.75 md:min-h-213.25 max-md:rounded-2xl">
      <Card className="max-w-137 absolute max-md:-bottom-2 md:top-21 xl:right-75 max-xl:right-45 max-md:right-2 max-md:left-2">
        <Title variant="purple" className="mb-4">
          Focused on Financial Customer Operations
        </Title>
        <Description className="mb-8" size="17">
          FinTech, lending, insurance, and other financial businesses deal with
          customer conversations that often require timely follow-up and clear
          handling. That is the environment Cinpc is built to support.
        </Description>

        <Button render={<Link href={'/solutions'} />}>Explore Solutions</Button>
      </Card>
      <Image
        src="/company/company-focused.png"
        fill
        alt="Image"
        sizes="100vw"
        className="object-cover -z-1 max-md:hidden"
      />
      <Image
        src="/company/company-focused-mobile.png"
        fill
        alt="Image"
        sizes="calc(100vw - 16px)"
        className="object-cover -z-1 md:hidden object-top rounded-[inherit]"
      />
    </section>
  );
}
