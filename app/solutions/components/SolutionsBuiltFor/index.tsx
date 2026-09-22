import Image from 'next/image';
import { cn } from 'cn';
import Title from '@/components/Title';
import Description from '@/components/Description';
import { Card } from '@/components/ui/card';

const items = [
  {
    image: '/home/built-for-one.png',
    title: 'FinTech',
    description:
      'Cover customer communication around digital financial products and services.',
  },
  {
    image: '/home/built-for-two.png',
    title: 'Lending',
    description:
      'Keep borrower inquiries, follow-ups, and routine contact moving.',
  },
  {
    image: '/home/built-for-three.png',
    title: 'Insurance',
    description:
      'Support customers through questions, requests, and ongoing communication.',
    aspect: 'aspect-[317/230]',
  },
  {
    image: '/home/built-for-four.png',
    title: 'Financial Services',
    description:
      'Add external call center capacity to established customer operations.',
  },
];

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

export default function SolutionsBuiltFor() {
  return (
    <section className="py-16">
      <div className="container">
        <Title
          variant="purple"
          className="mb-4 lg:leading-[140.625%] tracking-[-0.351px]"
        >
          Built for Financial Customer Operations
        </Title>
        <Description
          size="17"
          className="max-w-141.25 tracking-[0.103px] leading-[141.176%] mb-8 font-satoshi"
        >
          We handle customer support, outbound communication, sales assistance,
          and recurring customer contact as an extension of your operations.
        </Description>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => {
            const imageOnTop = index === 0 || index === 3;

            return (
              <div
                key={item.title}
                className="flex flex-col gap-4.25 justify-between bg-transparent"
              >
                <ItemImage
                  src={item.image}
                  alt={item.title}
                  aspect={item.aspect}
                  className={cn(imageOnTop ? 'lg:order-1' : 'lg:order-2')}
                />

                <Card
                  className={cn(
                    'p-4 grow-1 min-h-30 md:min-h-35.75 bg-light-gray',
                    imageOnTop ? 'lg:order-2' : 'lg:order-1'
                  )}
                >
                  <Title as="h3" className="mb-2.5 leading-none">
                    {item.title}
                  </Title>
                  <Description className="text-base tracking-[-0.432px] leading-[125%] font-satoshi">
                    {item.description}
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
