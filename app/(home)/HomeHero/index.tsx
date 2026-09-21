import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="mb-10">
      <div className="container">
        <div className="relative z-1 min-h-188">
          <Image
            src="/home/home-hero.png"
            fill
            alt="Image"
            priority
            className="object-cover -z-1 rounded-3xl"
          />

          <Card className="max-w-162.5 absolute bottom-4 left-4 right-4">
            <h1 className="text-[44px] max-lg:text-[32px] leading-[1.022] max-lg:leading-[1.406] font-bold mb-4 text-purple">
              Give Every Call Somewhere to Go
            </h1>
            <p className="text-[17px] max-md:text-base text-black-50 leading-[1.529] mb-14 max-lg:mb-8">
              When customer calls start competing with the work your team was
              actually hired to do, Cinpc takes them off the queue.
            </p>

            <Button render={<Link href="/contact" />}>
              Discuss Your Needs
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
