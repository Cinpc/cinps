import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from 'cn';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Description from '@/components/Description';
import Title from '@/components/Title';

export type HomeHeroProps = {
  title: ReactNode;
  description?: ReactNode;
  imageSrc: string;
  imageSrcMobile: string;
  buttonText?: string;
  buttonHref?: string;
  contentClassName?: string;
  cardClassName?: string;
  sectionClassName?: string;
};

export default function HomeHero({
  title,
  description,
  imageSrc,
  imageSrcMobile,
  buttonText,
  buttonHref,
  contentClassName,
  cardClassName,
  sectionClassName,
}: HomeHeroProps) {
  return (
    <section className={sectionClassName}>
      <div className="container">
        <div className={cn('relative z-1 min-h-94.75', contentClassName)}>
          <Image
            src={imageSrc}
            fill
            alt="Image"
            priority
            sizes="(min-width: 80rem) 1336px, calc(100vw - 16px)"
            className="object-cover -z-1 rounded-3xl max-md:hidden"
          />

          <Image
            src={imageSrcMobile}
            fill
            alt="Image"
            priority
            sizes="(min-width: 40rem) 624px, calc(100vw - 16px)"
            className="object-cover -z-1 rounded-3xl md:hidden"
          />
          <Card
            className={cn(
              'max-w-162.5 absolute bottom-4 left-4 right-4 max-md:p-4',
              cardClassName
            )}
          >
            <Title as="h1" variant="purple">
              {title}
            </Title>

            {description ? (
              <Description
                size="17"
                className="max-md:text-base max-md:leading-[24px] mt-4"
              >
                {description}
              </Description>
            ) : null}

            {buttonText && buttonHref ? (
              <Button
                render={<Link href={buttonHref} />}
                className="mt-14 max-lg:mt-8"
              >
                {buttonText}
              </Button>
            ) : null}
          </Card>
        </div>
      </div>
    </section>
  );
}
