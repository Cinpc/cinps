import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import Title from '@/components/Title';
import Description from '@/components/Description';

export default async function HomeVoiceCustomers() {
  const t = await getTranslations('HomeVoiceCustomers');

  return (
    <section className="relative z-1 min-h-193.5 md:min-h-177.25 max-md:mx-2">
      <Card className="max-w-165 absolute bottom-34 right-75 max-xl:right-15 max-md:left-2 max-md:right-2 max-md:bottom-8">
        <Title variant="purple" className="mb-4 leading-[1.4]">
          {t('title')}
        </Title>
        <Description className="mb-8" size="17">
          {t('description')}
        </Description>

        <Button render={<Link href={'/company'} />}>{t('button')}</Button>
      </Card>
      <Image
        src="/home/voice-customers.png"
        fill
        alt="Image"
        className="object-cover -z-1 max-md:hidden"
      />
      <Image
        src="/home/voice-customers-mobile.png"
        fill
        alt="Image"
        className="object-cover -z-1 md:hidden object-top"
      />
    </section>
  );
}
