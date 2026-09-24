import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Title from '@/components/Title';
import Description from '@/components/Description';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const items = [
  { key: 'inquiries', icon: '/icons/user-round-plus.svg' },
  { key: 'payments', icon: '/icons/credit-card-check.svg' },
  { key: 'applications', icon: '/icons/file-text.svg' },
  { key: 'complaints', icon: '/icons/file-user.svg' },
  { key: 'customerCare', icon: '/icons/user-shield.svg' },
  { key: 'communication', icon: '/icons/user-round-group.svg' },
] as const;

export default async function SolutionsFits() {
  const t = await getTranslations('SolutionsFits');

  return (
    <section className="md:mt-16 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.87235fr_1fr] gap-y-6">
          <div className="flex flex-col items-start">
            <Title
              variant="purple"
              className="leading-[142.857%] lg:leading-[140.625%] mb-4"
            >
              {t('title')}
            </Title>

            <Description
              size="17"
              className="max-w-129 max-md:text-sm max-md:leading-[150%]"
            >
              {t('description')}
            </Description>

            <div className="mt-auto max-lg:hidden">
              <Button render={<Link href="/services" />}>
                {t('button')}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-lg:mb-6">
            {items.map((item) => {
              const title = t(item.key);

              return (
                <Card key={item.key} className="p-4 bg-light-gray rounded-2xl">
                  <div className="mb-1">
                    <Image
                      src={item.icon}
                      width={24}
                      height={24}
                      alt={title}
                    />
                  </div>
                  <Title
                    as="h3"
                    variant="purple"
                    className="text-[17px] font-normal"
                  >
                    {title}
                  </Title>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden">
          <Button render={<Link href="/services" />}>{t('button')}</Button>
        </div>
      </div>
    </section>
  );
}
