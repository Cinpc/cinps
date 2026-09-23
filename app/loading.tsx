import { readFileSync } from 'fs';
import { join } from 'path';
import Preloader from '@/components/Preloader';

const preloaderSvg = readFileSync(
  join(process.cwd(), 'public/preloader.svg'),
  'utf8'
);

export default function Loading() {
  return <Preloader svg={preloaderSvg} />;
}
