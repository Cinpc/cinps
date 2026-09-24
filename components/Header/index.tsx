'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { cn } from 'cn';
import { Link, usePathname } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { menu } from '@/data/menu';
import { contactFormHref, contactFormId } from '@/data/contact';
import LocaleSwitcher from '@/components/LocaleSwitcher';

export default function Header() {
  const pathname = usePathname();
  const tMenu = useTranslations('Menu');
  const tHeader = useTranslations('Header');
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;

      if (
        menuRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }

      setOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <header>
      <div className="container relative flex flex-wrap items-center justify-between gap-6 py-4 lg:py-6">
        <Link
          href="/"
          aria-label={tMenu('home')}
          className="shrink-0 max-lg:max-w-30.5"
        >
          <Image src="/logo.svg" alt="Logo" width={188} height={56} priority />
        </Link>

        <div
          ref={menuRef}
          id="header-menu"
          className={cn(
            'lg:max-xl:order-3 lg:max-xl:mx-auto max-lg:absolute max-lg:top-21 max-lg:z-2 max-lg:bg-white max-lg:right-4 max-lg:rounded-3xl max-lg:p-4 max-lg:w-55',
            !open && 'max-lg:hidden'
          )}
        >
          <NavigationMenu className="flex-none">
            <NavigationMenuList className="gap-x-6 gap-y-4 max-lg:flex-col max-lg:items-start">
              {menu.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink
                    active={pathname === item.href}
                    className="max-lg:p-2 text-base"
                    render={<Link href={item.href} />}
                  >
                    {tMenu(item.id)}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="lg:hidden px-2 py-1.25">
            <LocaleSwitcher />
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-4 lg:gap-6.5">
          <Button
            nativeButton={false}
            className="h-11.5 px-6 text-base md:min-w-0 max-md:w-auto"
            variant="secondary"
            render={
              <Link
                href={contactFormHref}
                onClick={() => {
                  if (pathname === '/contact') {
                    document
                      .getElementById(contactFormId)
                      ?.scrollIntoView();
                  }
                }}
              />
            }
          >
            {tHeader('quote')}
          </Button>

          <div className="lg:hidden">
            <button
              ref={buttonRef}
              type="button"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-blue/15 backdrop-blur-xl"
              aria-label={open ? 'Close' : 'Menu'}
              aria-expanded={open}
              aria-controls="header-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <Image
                src={open ? '/close.svg' : '/icon.svg'}
                alt=""
                width={open ? 15 : 16}
                height={open ? 13 : 16}
              />
            </button>
          </div>

          <div className="max-lg:hidden">
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
