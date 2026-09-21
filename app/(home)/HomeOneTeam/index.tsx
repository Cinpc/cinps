import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const items = [
  {
    icon: '/icons/lifebuoy.svg',
    title: 'Compliance Support',
    description:
      'Support customer-facing processes around your established requirements and procedures.',
  },
  {
    icon: '/icons/headset.svg',
    title: 'Collections Support',
    description:
      'Keep payment reminders and collection-related follow-ups moving.',
  },
  {
    icon: '/icons/credit-card-reader.svg',
    title: 'Customer Care',
    description:
      'Handle everyday questions, requests, and account-related concerns.',
  },
  {
    icon: '/icons/triangle-alert.svg',
    title: 'Fraud Support',
    description:
      'Support communication around suspicious activity, verification, and further review.',
  },
  {
    icon: '/icons/sticky-note-check.svg',
    title: 'Application Support',
    description:
      'Guide customers through applications, information requests, and next steps.',
  },
  {
    icon: '/icons/file-user.svg',
    title: 'Complaint Handling',
    description:
      'Keep complaints moving through response, follow-up, and escalation.',
  },
];

export default function HomeOneTeam() {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container">
        <div className="mb-10">
          <Title variant="gray" className="mb-2">
            One Team for the Conversations You Need Covered
          </Title>
          <Description>
            Move recurring customer communication and support tasks outside your
            internal team.
          </Description>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-10">
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

        <div className="text-center">
          <Button className="mx-auto" render={<Link href={'/services'} />}>
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
