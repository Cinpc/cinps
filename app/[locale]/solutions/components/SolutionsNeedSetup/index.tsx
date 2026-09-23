import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export default function SolutionsNeedSetup() {
  return (
    <section className="lg:py-16 py-4 px-2 bg-light-gray max-md:mx-2 max-md:rounded-3xl">
      <div className="container">
        <div className="grid items-center lg:grid-cols-[1.4733fr_1fr] gap-6">
          <div className="relative rounded-3xl aspect-[358/368] md:aspect-[772/386]">
            <Image
              src="/solutions/need-setup.png"
              fill
              sizes="(min-width: 80rem) 772px, (min-width: 64rem) 47vw, 100vw"
              alt="Image"
              className="object-cover rounded-[inherit] max-md:hidden"
            />

            <Image
              src="/solutions/need-setup-mobile.png"
              fill
              alt="Image"
              sizes="(min-width: 40rem) 624px, calc(100vw - 32px)"
              className="object-cover rounded-[inherit] md:hidden"
            />
          </div>

          <div>
            <Title
              variant="purple"
              className="mb-4 leading-[142.857%] lg:leading-[140.625%]"
            >
              Need a Setup That Fits Your Business?
            </Title>
            <Description className="mb-8 leading-[1.529]" size="17">
              Tell us what your customers contact you about and where your
              internal team needs more capacity.
            </Description>

            <Button render={<Link href="/contact" />}>Get a Quote</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
