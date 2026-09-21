import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from 'cn';
import Title from '@/components/Title';
import Description from '@/components/Description';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export type HomeOneTeamItem = {
  icon: string;
  title: string;
  description: string;
};

export type HomeOneTeamProps = {
  title: ReactNode;
  description?: ReactNode;
  items: HomeOneTeamItem[];
  buttonText?: string;
  buttonHref?: string;
  sectionClassName?: string;
};

export default function HomeOneTeam({
  title,
  description,
  items,
  buttonText,
  buttonHref,
  sectionClassName,
}: HomeOneTeamProps) {
  return (
    <section className={cn('py-16 bg-light-gray', sectionClassName)}>
      <div className="container">
        <div className="mb-10 space-y-2">
          <Title variant="gray">{title}</Title>
          {description ? <Description>{description}</Description> : null}
        </div>

        <div
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5',
            buttonText && buttonHref && 'mb-10'
          )}
        >
          {items.map((item) => (
            <Card
              key={item.title}
              className="text-center px-7.5 py-12.5 shadow-[0_0_15px_-7px_rgba(0,0,0,0.10)]"
            >
              <div className="mb-3.5">
                <Image
                  src={item.icon}
                  width={40}
                  height={40}
                  alt={item.title}
                  className="mx-auto"
                />
              </div>
              <Title as="h3" className="mb-3.5">
                {item.title}
              </Title>
              <Description className="max-w-3xs mx-auto">
                {item.description}
              </Description>
            </Card>
          ))}
        </div>

        {buttonText && buttonHref ? (
          <div className="text-center">
            <Button className="mx-auto" render={<Link href={buttonHref} />}>
              {buttonText}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
