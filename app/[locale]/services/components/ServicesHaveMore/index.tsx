import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { contactFormHref } from '@/data/contact';

export default async function HomeHaveMore() {
  const t = await getTranslations('ServicesHaveMore');

  return (
    <section className="lg:py-16 py-4 px-2 bg-light-gray max-md:mx-2 max-md:rounded-3xl">
      <div className="container">
        <div className="grid items-center lg:grid-cols-[1.4733fr_1fr] gap-6">
          <div className="relative rounded-3xl aspect-[772/420] max-md:aspect-[342/281]">
            <Image
              src="/services/have-more.png"
              fill
              sizes="(min-width: 80rem) 772px, (min-width: 64rem) 47vw, 100vw"
              alt="Image"
              className="object-cover rounded-[inherit]"
            />
          </div>

          <div>
            <Title
              variant="purple"
              className="mb-4 leading-[1.4] max-lg:leading-[142.857%]"
            >
              {t('title')}
            </Title>
            <Description className="mb-8 leading-[1.529]" size="17">
              {t('description')}
            </Description>

            <Button render={<Link href={contactFormHref} />}>
              {t('button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
