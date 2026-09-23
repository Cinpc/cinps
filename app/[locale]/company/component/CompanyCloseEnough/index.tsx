import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const items = [
  {
    title: 'Your Processes',
    description:
      'We work around the workflows and requirements defined for your operation.',
    image: '/icons/chart-spline.svg',
  },
  {
    title: 'Clear Responsibilities',
    description:
      'Both teams know what Cinpc handles, what stays in-house, and when a handoff is needed.',
    image: '/icons/list-check.svg',
  },
  {
    title: 'Room to Adapt',
    description:
      'The setup can change as customer volumes, priorities, and operational needs change.',
    image: '/icons/scaling.svg',
  },
];

export default function CompanyCloseEnough() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[1.37957fr_1fr] items-start gap-4 mb-8">
          <Title variant="purple">Close Enough to Work as One Team</Title>
          <Description>
            Good outsourcing should make responsibilities clearer, not create
            another layer to manage.
          </Description>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Card key={item.title} className="bg-light-gray p-4 rounded-2xl">
              <div className="flex gap-2 items-center mb-2">
                <Image src={item.image} width="24" height="24" alt="Image" />
                <Title
                  as="h3"
                  variant="purple"
                  className="text-xl leading-[1.5]"
                >
                  {item.title}
                </Title>
              </div>
              <Description size="17">{item.description}</Description>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
