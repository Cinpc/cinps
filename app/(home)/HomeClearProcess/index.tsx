import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const items = [
  {
    icon: '/icons/map.svg',
    title: 'Map',
    description:
      'We identify which conversations and tasks need to leave your internal queue.',
  },
  {
    icon: '/icons/projector-screen-chart.svg',
    title: 'Set Up',
    description:
      'Workflows, requirements, and team responsibilities are prepared before launch.',
  },
  {
    icon: '/icons/toggle-right.svg',
    title: 'Go Live',
    description:
      'The Cinpc team starts handling the agreed customer operations.',
  },
  {
    icon: '/icons/sliders.svg',
    title: 'Adjust',
    description:
      'Capacity and workflows change when volumes, priorities, or requirements do.',
  },
];

export default function HomeClearProcess() {
  return (
    <section className="py-16">
      <div className="container">
        <Title variant="purple" className="tracking-[-0.171px] max-md:mb-6">
          A Clear Process from Day One
        </Title>

        <div className="mb-16 max-md:mx-auto max-md:max-w-70">
          {items.map((item, index) => {
            const isEven = index % 2 === 1;
            const isLast = index === items.length - 1;

            const content = (
              <div className="grid grid-cols-[24px_auto] gap-y-3 gap-x-1.5 items-center">
                <Image src={item.icon} width={24} height={24} alt="Icon" />
                <Title as="h3" className="font-normal leading-[1]">
                  {item.title}
                </Title>
                <div className="col-span-full">
                  <Description className="max-w-67.5 text-base tracking-[-0.432px] font-satoshi leading-[1.25]">
                    {item.description}
                  </Description>
                </div>
              </div>
            );

            return (
              <div
                key={item.title}
                className="grid grid-cols-[58px_1fr] lg:grid-cols-[1fr_58px_1fr] gap-x-4 lg:gap-x-6 items-start"
              >
                <div className="col-start-1 lg:col-start-2 flex flex-col items-center">
                  <div className={`max-md:max-w-5.5${isLast ? '' : ' mb-6'}`}>
                    <Image
                      src="/icons/frame-24.svg"
                      width={58}
                      height={58}
                      alt="Icon"
                    />
                  </div>
                  {!isLast && (
                    <Image
                      src="/icons/vector-3.svg"
                      width={1}
                      height={89}
                      alt=""
                    />
                  )}
                </div>

                <div
                  className={
                    isEven
                      ? 'col-start-2 lg:col-start-1 lg:justify-self-end'
                      : 'col-start-2 lg:col-start-3 lg:justify-self-start'
                  }
                >
                  {content}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button className="mx-auto" render={<Link href={'/process'} />}>
            See Our Process
          </Button>
        </div>
      </div>
    </section>
  );
}
