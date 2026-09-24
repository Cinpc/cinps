import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export type MetaPage =
  | 'home'
  | 'services'
  | 'solutions'
  | 'process'
  | 'company'
  | 'contact';

export async function getPageMetadata(page: MetaPage): Promise<Metadata> {
  const t = await getTranslations(`Meta.${page}`);

  return {
    title: t('title'),
    description: t('description'),
  };
}
