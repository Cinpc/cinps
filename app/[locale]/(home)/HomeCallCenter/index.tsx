import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';

const images = [
  '/home/call-center-one.png',
  '/home/call-center-two.png',
  '/home/call-center-three.png',
];

export default async function HomeCallCenter() {
  const t = await getTranslations('HomeCallCenter');

  return (
    <section className="pt-10 pb-17.5 max-md:py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[1.1fr_1.3248fr] items-start gap-y-2 gap-x-28 mb-10">
          <Title variant="gray">{t('title')}</Title>
          <Description>{t('description')}</Description>
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
