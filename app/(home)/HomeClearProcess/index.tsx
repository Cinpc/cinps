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
        <Title variant="purple" className="tracking-[-0.171px] mb-6">
          A Clear Process from Day One
        </Title>

        <div className="mb-16 space-y-2.5">
          {items.map((item) => (
            <div
              key={item.title}
              className="grid items-start justify-center gap-6 grid-cols-[58px_24px_1fr] md:grid-cols-[269px_58px_269px] md:even:[&>:last-child]:order-first md:even:[&>:first-child]:order-last last:[&>:nth-child(2)>img:last-child]:hidden last:[&>:nth-child(2)>img:first-child]:mb-0"
            >
              <div></div>
              <div className="max-md:pt-8">
                <Image
                  src="/icons/frame-24.svg"
                  width={58}
                  height={58}
                  alt="Icon"
                  className="mb-6"
                />
                <Image
                  src="/icons/vector-3.svg"
                  width={1}
                  height={89}
                  alt="Icon"
                  className="mx-auto"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <Image src={item.icon} width={24} height={24} alt="" />
                  <Title as="h3" className="font-normal leading-[1]">
                    {item.title}
                  </Title>
                </div>
                <div className="col-span-full">
                  <Description className="max-w-67.5 text-base tracking-[-0.432px] font-satoshi leading-[1.25]">
                    {item.description}
                  </Description>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="mx-auto" render={<Link href="/process" />}>
            See Our Process
          </Button>
        </div>
      </div>
    </section>
  );
}
