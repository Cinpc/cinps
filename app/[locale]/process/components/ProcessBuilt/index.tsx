import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';

export default async function ProcessBuilt() {
  const t = await getTranslations('ProcessBuilt');

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_0.72486fr] gap-4 items-start">
          <Title
            variant="purple"
            className="leading-[142.857%] lg:leading-[140.625%]"
          >
            {t('title')}
          </Title>
          <Description size="17">{t('description')}</Description>
        </div>
      </div>
    </section>
  );
}
