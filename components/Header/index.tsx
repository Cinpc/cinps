'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { menu } from '@/data/menu';
import LocaleSwitcher from '@/components/LocaleSwitcher';

export default function Header() {
  const pathname = usePathname();
  const tMenu = useTranslations('Menu');
  const tHeader = useTranslations('Header');

  return (
    <header>
      <div className="container flex items-center justify-between gap-6 py-6">
        <Link href="/" aria-label={tMenu('home')} className="shrink-0">
          <Image src="/logo.svg" alt="Logo" width={188} height={56} priority />
        </Link>

        <NavigationMenu className="flex-none">
          <NavigationMenuList className="gap-6">
            {menu.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink
                  active={pathname === item.href}
                  className={navigationMenuTriggerStyle()}
                  render={<Link href={item.href} />}
                >
                  {tMenu(item.id)}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex shrink-0 items-center gap-6.5">
          <Button
            nativeButton={false}
            className="h-11.5 px-6 text-base md:min-w-0"
            variant="secondary"
            render={<Link href="/contact" />}
          >
            {tHeader('quote')}
          </Button>

          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
