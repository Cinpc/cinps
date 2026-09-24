import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Image from 'next/image';
import Description from '@/components/Description';

const itemKeys = ['review', 'talk', 'scope'] as const;

export default async function ContactWhatHappens() {
  const t = await getTranslations('ContactWhatHappens');

  return (
    <section className="py-16 max-lg:px-2">
      <div className="container">
        <Title variant="purple" className="mb-8 lg:text-center">
          {t('title')}
        </Title>

        <div className="grid lg:grid-cols-[270px_220px_220px] justify-between gap-y-24.5">
          {itemKeys.map((key, index) => (
            <div
              key={key}
              className="group max-lg:flex max-lg:gap-4 max-lg:items-center relative"
            >
              <div className="relative max-md:max-w-10.5 max-lg:shrink-0">
                <Image
                  src="/icons/frame-24.svg"
                  width={58}
                  height={58}
                  alt="Icon"
                  className="lg:mb-6 lg:mx-auto"
                />
                <div className="absolute h-px top-1/2 -translate-y-1/2 left-[80%] group-last:hidden xl:w-100 lg:w-60 max-lg:hidden">
                  <Image
                    src="/icons/vector-3-horizontal.svg"
                    fill
                    sizes="400px"
                    alt="Icon"
                  />
                </div>
              </div>
              <div>
                <Title as="h3" className="tracking-[-0.15px] font-normal mb-1">
                  <span className="text-blue inline-block mr-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {t(`${key}.title`)}
                </Title>

                <Description
                  className="font-satoshi tracking-[-0.432px] text-mid-gray"
                  size="base"
                >
                  {t(`${key}.description`)}
                </Description>
              </div>
              <div className="absolute h-20 w-px top-full left-5.25 group-last:hidden lg:hidden">
                <Image
                  src="/icons/vector-3-vertical.svg"
                  fill
                  sizes="1px"
                  alt="Icon"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
