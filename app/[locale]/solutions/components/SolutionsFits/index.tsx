import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import Title from '@/components/Title';
import Description from '@/components/Description';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const items = [
  {
    icon: '/icons/user-round-plus.svg',
    title: 'New customer inquiries',
  },
  {
    icon: '/icons/credit-card-check.svg',
    title: 'Payment and collection follow-ups',
  },
  {
    icon: '/icons/file-text.svg',
    title: 'Applications and verification',
  },
  {
    icon: '/icons/file-user.svg',
    title: 'Complaints and escalations',
  },
  {
    icon: '/icons/user-shield.svg',
    title: 'Everyday customer care',
  },
  {
    icon: '/icons/user-round-group.svg',
    title: 'Ongoing customer communication',
  },
];

export default function SolutionsFits() {
  return (
    <section className="md:mt-16 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.87235fr_1fr] gap-y-6">
          <div className="flex flex-col items-start">
            <Title
              variant="purple"
              className="leading-[142.857%] lg:leading-[140.625%] mb-4"
            >
              Where Cinpc Fits In
            </Title>

            <Description
              size="17"
              className="max-w-129 max-md:text-sm max-md:leading-[150%]"
            >
              Customer operations rarely stay inside one neat category. Support
              can be built around different points in the customer journey:
            </Description>

            <div className="mt-auto max-lg:hidden">
              <Button render={<Link href="/services" />}>
                Explore Services
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-lg:mb-6">
            {items.map((item) => (
              <Card key={item.title} className="p-4 bg-light-gray rounded-2xl">
                <div className="mb-1">
                  <Image
                    src={item.icon}
                    width={24}
                    height={24}
                    alt={item.title}
                  />
                </div>
                <Title
                  as="h3"
                  variant="purple"
                  className="text-[17px] font-normal"
                >
                  {item.title}
                </Title>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <Button render={<Link href="/services" />}>Explore Services</Button>
        </div>
      </div>
    </section>
  );
}
