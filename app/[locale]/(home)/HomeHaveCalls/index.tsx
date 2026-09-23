import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export default async function HomeHaveCalls() {
  const t = await getTranslations('HomeHaveCalls');

  return (
    <section className="py-16 bg-light-gray max-md:mx-2">
      <div className="container">
        <div className="grid items-center lg:grid-cols-[0.87273fr_1fr] gap-y-6 gap-x-21">
          <div className="relative rounded-3xl aspect-[576/378] max-md:aspect-[358/351]">
            <Image
              src="/home/have-calls.png"
              fill
              sizes="(min-width: 80rem) 576px, (min-width: 64rem) 47vw, 100vw"
              alt="Image"
              className="object-cover rounded-[inherit]"
            />
          </div>

          <div>
            <Title variant="purple" className="mb-4 leading-[1.4]">
              {t('title')}
            </Title>
            <Description className="mb-8" size="17">
              {t('description')}
            </Description>

            <Button render={<Link href="/contact" />}>{t('button')}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
