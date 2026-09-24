import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';

export default async function SolutionsKeepCore() {
  const t = await getTranslations('SolutionsKeepCore');

  return (
    <section className="lg:pt-16 pb-16">
      <div className="container">
        <div className="grid lg:grid-cols-[0.81616fr_1fr] gap-4 items-end">
          <Title
            variant="purple"
            className="leading-[142.857%] lg:leading-[140.625%]"
          >
            {t('title')} <br /> {t('titleSecond')}
          </Title>
          <Description size="17">{t('description')}</Description>
        </div>
      </div>
    </section>
  );
}
