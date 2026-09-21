'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { menu } from '@/data/menu';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={'overflow-hidden'}>
      <div className="container flex items-center justify-between gap-6 py-6">
        <Link href="/" aria-label="Home" className="shrink-0">
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
                  {item.label}
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
            Get a quote
          </Button>

          <Button
            type="button"
            className={'px-0 gap-2 md:min-w-0'}
            variant="ghost"
            aria-label="Language"
          >
            <Image
              src="/icons/en-lang.svg"
              alt="English"
              width={24}
              height={16}
            />
            <Image src="/icons/caret-down.svg" alt="" width={16} height={16} />
          </Button>
        </div>
      </div>
    </header>
  );
}
