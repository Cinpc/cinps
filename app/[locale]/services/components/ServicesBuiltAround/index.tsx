import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export default async function ServicesBuiltAround() {
  const t = await getTranslations('ServicesBuiltAround');

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <Title
              variant="purple"
              className="mb-4 leading-[140.625%] max-lg:text-[32px]"
            >
              {t('title')}
            </Title>

            <Description size="17" className="max-w-179.5 leading-[1.529]">
              {t('description')}
            </Description>
          </div>
          <div>
            <Button render={<Link href={'/process'} />}>{t('button')}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
