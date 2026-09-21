import Title from '@/components/Title';
import Description from '@/components/Description';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesBuiltAround() {
  return (
    <section className="mb-16">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <Title
              variant="purple"
              className="mb-4 leading-[140.625%] max-lg:text-[32px]"
            >
              Built Around Your Workflow
            </Title>

            <Description size="17" className="max-w-179.5 leading-[1.529]">
              Your processes come first. Cinpc works around defined
              responsibilities, communication requirements, and handoff points
              rather than forcing customer operations into a fixed service
              package.
            </Description>
          </div>
          <div>
            <Button render={<Link href={'/process'} />}>See Our Process</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
