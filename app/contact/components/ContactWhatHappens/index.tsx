import Title from '@/components/Title';
import Image from 'next/image';
import Description from '@/components/Description';

const items = [
  {
    title: 'We Review',
    description:
      'We look at what you need covered and the type of customer communication involved.',
  },
  {
    title: 'We Talk',
    description:
      'Our team contacts you to clarify volumes, workflows, priorities, and requirements.',
  },
  {
    title: 'We Scope It',
    description:
      'We outline a call center setup that matches the work you want to outsource.\n',
  },
];

export default function ContactWhatHappens() {
  return (
    <section className="py-16 max-lg:px-2">
      <div className="container">
        <Title variant="purple" className="mb-8 lg:text-center">
          What Happens After You Contact Us?
        </Title>

        <div className="grid lg:grid-cols-[270px_220px_220px] justify-between gap-y-24.5">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="group max-lg:flex max-lg:gap-4 max-lg:items-center relative"
            >
              <div className="relative max-md:max-w-10.5 max-lg:shrink-0">
                <Image
                  src="/icons/frame-24.svg"
                  width={58}
                  height={58}
                  alt="Icon"
                  className="lg:mb-6 lg:mx-auto"
                />
                <div className="absolute h-px top-1/2 -translate-y-1/2 left-[80%] group-last:hidden xl:w-100 lg:w-60 max-lg:hidden">
                  <Image
                    src="/icons/vector-3-horizontal.svg"
                    fill
                    sizes="400px"
                    alt="Icon"
                  />
                </div>
              </div>
              <div>
                <Title as="h3" className="tracking-[-0.15px] font-normal mb-1">
                  <span className="text-blue inline-block mr-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item.title}
                </Title>

                <Description
                  className="font-satoshi tracking-[-0.432px] text-mid-gray"
                  size="base"
                >
                  {item.description}
                </Description>
              </div>
              <div className="absolute h-20 w-px top-full left-5.25 group-last:hidden lg:hidden">
                <Image
                  src="/icons/vector-3-vertical.svg"
                  fill
                  sizes="1px"
                  alt="Icon"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
