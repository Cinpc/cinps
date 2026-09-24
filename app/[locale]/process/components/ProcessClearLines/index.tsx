import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Image from 'next/image';
import Description from '@/components/Description';

const itemKeys = [
  'handles',
  'staysInHouse',
  'handedBack',
  'situations',
] as const;

export default async function ProcessClearLines() {
  const t = await getTranslations('ProcessClearLines');

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_0.73261fr] gap-6">
          <div>
            <Title variant="purple" className="mb-4 max-lg:leading-[142.857%]">
              {t('title')}
            </Title>

            <Description className="mb-4 md:leading-[150%] leading-[131.25%] max-md:text-base">
              {t('description')}
            </Description>

            <div className="space-y-2 md:space-y-4 mb-4">
              {itemKeys.map((key) => (
                <div
                  key={key}
                  className="relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1.25 before:bg-blue pl-7 max-md:space-y-2"
                >
                  <Title as="h3" className="font-normal leading-[140%]">
                    {t(key)}
                  </Title>
                </div>
              ))}
            </div>

            <Description className="leading-[150%] max-md:text-base">
              {t('afterList')}
            </Description>
          </div>

          <div className="relative rounded-3xl">
            <Image
              src="/process/clear-lines.png"
              fill
              sizes="(min-width: 80rem) 548px, (min-width: 64rem) 61vw, 100vw"
              alt="Image"
              className="object-cover rounded-[inherit] max-lg:hidden"
            />

            <Image
              src="/process/clear-lines-mobile.png"
              alt="Image"
              className="rounded-[inherit] lg:hidden"
              width="374"
              height="313"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
