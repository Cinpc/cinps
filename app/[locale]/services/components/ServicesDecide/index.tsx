import Title from '@/components/Title';
import Image from 'next/image';
import Description from '@/components/Description';

const items = [
  {
    title: 'Keep critical decisions in-house',
  },
  {
    title: 'Move recurring communication to Cinpc',
  },
  {
    title: 'Define when cases are escalated',
  },
  {
    title: 'Adjust the scope as needs change',
  },
];

export default function ServicesDecide() {
  return (
    <section className="mb-16 lg:mb-32">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.0769fr] gap-6">
          <div className="order-1 max-lg:order-2">
            <Title variant="purple" className="max-w-91 mb-4">
              Decide What Stays. Move What Doesn&apos;t.
            </Title>

            <Description className="mb-10 leading-[150%]">
              You don&apos;t have to outsource the whole customer operation.
            </Description>

            <div className="space-y-7.5 max-md:space-y-6">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1.25 before:bg-blue pl-7 max-md:space-y-2"
                >
                  <Title
                    as="h3"
                    className="text-[28px] max-lg:text-2xl max-lg:leading-[142.857%]"
                  >
                    {item.title}
                  </Title>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl order-2 max-lg:order-1 max-lg:aspect-[672/396] max-md:aspect-[374/396]">
            <Image
              src="/services/deside.png"
              fill
              sizes="(min-width: 80rem) 672px, (min-width: 64rem) 61vw, 100vw"
              alt="Image"
              className="object-cover rounded-[inherit] max-md:hidden"
            />

            <Image
              src="/services/deside-mobile.png"
              fill
              sizes="(min-width: 40rem) 624px, calc(100vw - 16px)"
              alt="Image"
              className="object-cover rounded-[inherit] md:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
