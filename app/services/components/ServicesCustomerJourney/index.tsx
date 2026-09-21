import Image from 'next/image';
import { Card } from '@/components/ui/card';
import Description from '@/components/Description';
import Title from '@/components/Title';

export default function ServicesCustomerJourney() {
  return (
    <section className="md:py-16 md:bg-light-gray mb-16">
      <div className="container">
        <div className="relative z-1 min-h-211.25 lg:min-h-181">
          <Image
            src="/services/services-customer.png"
            fill
            alt="Image"
            priority
            sizes="(min-width: 80rem) 1336px, calc(100vw - 16px)"
            className="object-cover -z-1 rounded-3xl max-md:hidden"
          />

          <Image
            src="/services/services-customer-mobile.png"
            fill
            alt="Image"
            priority
            sizes="(min-width: 40rem) 624px, calc(100vw - 16px)"
            className="object-cover -z-1 rounded-3xl md:hidden"
          />
          <Card className="max-w-179.75 absolute bottom-2 md:bottom-4 left-4 right-4 max-md:p-4">
            <Title
              variant="purple"
              className="lg:leading-[140.625%] leading-[142.857%]"
            >
              One Customer Journey, Fewer Handoffs
            </Title>

            <Description size="17" className="leading-[1.529]">
              A customer may start with a simple question and end up needing
              verification, a follow-up, or another team. Cinpc can connect
              several support functions within one outsourced setup instead of
              treating every conversation as a separate task.
            </Description>
          </Card>
        </div>
      </div>
    </section>
  );
}
