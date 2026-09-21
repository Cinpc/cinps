import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';

const items = [
  {
    title: 'Room to scale',
    description:
      'Add capacity when the queue grows without rebuilding your internal team.',
  },
  {
    title: 'Your way of working',
    description:
      'Set the workflows, requirements, and communication standards the team follows.\n',
  },
  {
    title: 'Fewer loose ends',
    description:
      'Keep calls, follow-ups, and customer requests from falling between responsibilities.',
  },
  {
    title: 'More time in-house',
    description:
      'Leave recurring communication outside so your team can stay on its core work.',
  },
];

export default function HomeLessPressure() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[0.6302fr_1fr] gap-6">
          <div className="order-1 max-lg:order-2">
            <Title variant="purple" className="max-w-91 mb-4">
              Less Pressure Behind the Scenes
            </Title>
            <Description className="mb-10">
              Outsourcing works best when your own team notices the difference
              too. Cinpc adds people and capacity where customer communication
              is creating bottlenecks.
            </Description>

            <div className="space-y-7.5">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1.25 before:bg-blue pl-7"
                >
                  <Title as="h3" className="text-[28px] leading-[1.2] mb-2">
                    {item.title}
                  </Title>
                  <Description className="max-w-89" size="xs">
                    {item.description}
                  </Description>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl max-lg:aspect-[795/606] order-2 max-lg:order-1">
            <Image
              src="/home/less-pressure.png"
              fill
              sizes="(min-width: 80rem) 820px, (min-width: 64rem) 61vw, 100vw"
              alt="Image"
              className="object-cover rounded-[inherit]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
