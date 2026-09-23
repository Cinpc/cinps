import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';

const itemKeys = ['scale', 'working', 'looseEnds', 'timeInHouse'] as const;

export default async function HomeLessPressure() {
  const t = await getTranslations('HomeLessPressure');

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[0.6302fr_1fr] gap-6">
          <div className="order-1 max-lg:order-2">
            <Title variant="purple" className="max-w-91 mb-4">
              {t('title')}
            </Title>
            <Description className="mb-10">{t('description')}</Description>

            <div className="space-y-7.5">
              {itemKeys.map((key) => (
                <div
                  key={key}
                  className="relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1.25 before:bg-blue pl-7 space-y-2"
                >
                  <Title as="h3" className="text-[28px] leading-[1.2]">
                    {t(`${key}.title`)}
                  </Title>
                  <Description className="max-w-89" size="xs">
                    {t(`${key}.description`)}
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
