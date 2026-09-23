import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export default function CompanyLetsTalk() {
  return (
    <section className="max-lg:py-4 px-2 lg:py-16 bg-light-gray max-md:mx-2 max-md:rounded-3xl">
      <div className="container">
        <div className="grid items-center lg:grid-cols-[1.29402fr_1fr] gap-x-14 gap-y-6">
          <div className="relative rounded-3xl lg:aspect-[713/454]">
            <Image
              src="/company/lets-talk.png"
              fill
              sizes="(min-width: 80rem) 713px, (min-width: 64rem) 47vw, 100vw"
              alt="Image"
              className="object-cover rounded-[inherit] max-lg:hidden"
            />

            <Image
              src="/company/lets-talk-mobile.png"
              alt="Image"
              width="342"
              height="368"
              className="rounded-[inherit] lg:hidden"
            />
          </div>

          <div>
            <Title variant="purple" className="mb-4">
              Let&apos;s Talk About Your Operation
            </Title>
            <Description className="mb-8" size="17">
              Tell us what is currently handled in-house and where you need
              additional support.
            </Description>

            <Button render={<Link href="/contact" />}>Get a Quote</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
