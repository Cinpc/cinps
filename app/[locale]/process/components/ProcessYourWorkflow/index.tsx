import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export default function ProcessYourWorkflow() {
  return (
    <section className="max-lg:py-4 max-lg:px-2 lg:py-16 bg-light-gray max-md:mx-2 max-md:rounded-3xl">
      <div className="container">
        <div className="grid items-center lg:grid-cols-[1.4733fr_1fr] gap-6">
          <div className="relative rounded-3xl lg:aspect-[772/606] max-lg:order-2">
            <Image
              src="/process/workflow.png"
              fill
              sizes="(min-width: 80rem) 772px, (min-width: 64rem) 47vw, 100vw"
              alt="Image"
              className="object-cover rounded-[inherit] max-lg:hidden"
            />

            <Image
              src="/process/workflow-mobile.png"
              alt="Image"
              width="342"
              height="397"
              className="rounded-[inherit] lg:hidden"
            />
          </div>

          <div className="max-lg:order-1">
            <Title
              variant="purple"
              className="mb-4 leading-[142.857%] lg:leading-[140.625%]"
            >
              Your Workflow Doesn&apos;t Disappear
            </Title>
            <Description className="mb-8 leading-[1.529]" size="17">
              Outsourcing doesn&apos;t mean rebuilding customer operations
              around someone else&apos;s system. Cinpc works within the
              processes and requirements defined for the functions you move
              outside.
            </Description>

            <Button render={<Link href="/services" />}>Explore Services</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
