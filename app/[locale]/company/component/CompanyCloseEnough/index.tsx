import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const items = [
  { key: 'processes', image: '/icons/chart-spline.svg' },
  { key: 'responsibilities', image: '/icons/list-check.svg' },
  { key: 'adapt', image: '/icons/scaling.svg' },
] as const;

export default async function CompanyCloseEnough() {
  const t = await getTranslations('CompanyCloseEnough');

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[1.37957fr_1fr] items-start gap-4 mb-8">
          <Title variant="purple">{t('title')}</Title>
          <Description>{t('description')}</Description>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Card key={item.key} className="bg-light-gray p-4 rounded-2xl">
              <div className="flex gap-2 items-center mb-2">
                <Image src={item.image} width="24" height="24" alt="Image" />
                <Title
                  as="h3"
                  variant="purple"
                  className="text-xl leading-[1.5]"
                >
                  {t(`${item.key}.title`)}
                </Title>
              </div>
              <Description size="17">{t(`${item.key}.description`)}</Description>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
