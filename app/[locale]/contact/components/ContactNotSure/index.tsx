import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import Title from '@/components/Title';
import Description from '@/components/Description';

export default async function ContactNotSure() {
  const t = await getTranslations('ContactNotSure');

  return (
    <section className="relative z-1 min-h-174.25 md:min-h-127.25 max-md:rounded-2xl max-md:mx-2">
      <Card className="max-w-137 absolute max-md:bottom-4 md:top-21 xl:right-75 max-xl:right-45 max-md:right-2 max-md:left-2">
        <Title variant="purple" className="mb-4">
          {t('title')}
        </Title>
        <Description className="mb-8" size="17">
          {t('description')}
        </Description>

        <Button render={<Link href={'/services'} />}>{t('button')}</Button>
      </Card>
      <Image
        src="/contact/not-sure.png"
        fill
        alt="Image"
        sizes="100vw"
        className="object-cover -z-1 max-md:hidden"
      />
      <Image
        src="/contact/not-sure-mobile.png"
        fill
        alt="Image"
        sizes="calc(100vw - 16px)"
        className="object-cover -z-1 md:hidden object-top rounded-[inherit]"
      />
    </section>
  );
}
