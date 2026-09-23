import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { cn } from 'cn';
import Title from '@/components/Title';
import Description from '@/components/Description';
import { Card } from '@/components/ui/card';

const items = [
  {
    key: 'fintech',
    image: '/home/built-for-one.png',
  },
  {
    key: 'lending',
    image: '/home/built-for-two.png',
  },
  {
    key: 'insurance',
    image: '/home/built-for-three.png',
    aspect: 'aspect-[317/230]',
  },
  {
    key: 'financialServices',
    image: '/home/built-for-four.png',
  },
] as const;

function ItemImage({
  src,
  alt,
  aspect = 'aspect-[374/242] md:aspect-[317/302]',
  className,
}: {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div className={cn('relative rounded-2xl', aspect, className)}>
      <Image
        src={src}
        fill
        sizes="(min-width: 80rem) 317px, (min-width: 48rem) 50vw, 100vw"
        alt={alt}
        className="object-cover rounded-[inherit]"
      />
    </div>
  );
}

export default async function HomeBuiltFor() {
  const t = await getTranslations('HomeBuiltFor');

  return (
    <section className="py-16 bg-light-gray">
      <div className="container">
        <Title
          variant="purple"
          className="mb-4 lg:leading-[140.625%] tracking-[-0.351px]"
        >
          {t('title')}
        </Title>
        <Description
          size="17"
          className="max-w-141.25 tracking-[0.103px] leading-[141.176%] mb-8 font-satoshi"
        >
          {t('description')}
        </Description>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => {
            const imageOnTop = index === 0 || index === 3;
            const title = t(`${item.key}.title`);

            return (
              <div
                key={item.key}
                className="flex flex-col gap-4.25 justify-between bg-transparent"
              >
                <ItemImage
                  src={item.image}
                  alt={title}
                  aspect={'aspect' in item ? item.aspect : undefined}
                  className={cn(imageOnTop ? 'lg:order-1' : 'lg:order-2')}
                />

                <Card
                  className={cn(
                    'p-4 grow-1 min-h-30 md:min-h-35.75',
                    imageOnTop ? 'lg:order-2' : 'lg:order-1'
                  )}
                >
                  <Title as="h3" className="mb-2.5 leading-none">
                    {title}
                  </Title>
                  <Description className="text-base tracking-[-0.432px] leading-[125%] font-satoshi">
                    {t(`${item.key}.description`)}
                  </Description>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
