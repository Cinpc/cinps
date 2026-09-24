import { getTranslations } from 'next-intl/server';
import Title from '@/components/Title';
import Description from '@/components/Description';

export default async function CompanyPeopleBehind() {
  const t = await getTranslations('CompanyPeopleBehind');

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_0.72486fr] gap-4 items-start">
          <Title variant="purple">{t('title')}</Title>
          <Description size="17">{t('description')}</Description>
        </div>
      </div>
    </section>
  );
}
