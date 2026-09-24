import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';

const images = [
  '/company/about-one.png',
  '/company/about-two.png',
  '/company/about-three.png',
];

export default async function CompanyAbout() {
  const t = await getTranslations('CompanyAbout');

  return (
    <section className="lg:pb-16 pt-16">
      <div className="container">
        <div className="grid lg:grid-cols-[1.1fr_1.3248fr] items-start gap-y-2 gap-x-28 mb-10">
          <Title variant="purple">{t('title')}</Title>
          <div className="space-y-4">
            <Description>{t('description')}</Description>
            <Description>{t('descriptionSecond')}</Description>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((src) => (
            <div key={src} className="aspect-[424/276] relative">
              <Image
                src={src}
                fill
                sizes="(min-width: 80rem) 424px, 33vw"
                alt="Image"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
