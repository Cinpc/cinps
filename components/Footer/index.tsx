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
} from '@/components/ui/navigation-menu';
import { footerMenu, legalMenu } from '@/data/menu';
import { contact, socials } from '@/data/contact';
import Description from '@/components/Description';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="py-16 max-lg:pt-20 max-lg:pb-8">
      <div className="container">
        <div className="grid lg:grid-cols-[0.41026fr_1fr] items-start pb-14 max-lg:pb-12 border-b border-black/10 gap-y-6">
          <div>
            <Link href="/" aria-label="Home" className="mb-2">
              <Image src="/logo.svg" alt="Logo" width={188} height={56} />
            </Link>

            <Description className="max-w-65" size="15" variant="mid-gray">
              Customer support & BPO solutions for financial businesses.
            </Description>

            <div className="flex shrink-0 items-center gap-6.5 max-lg:hidden mt-21">
              <Button
                type="button"
                className="p-0 md:min-w-0"
                variant="ghost"
                aria-label="Language"
              >
                <Image
                  src="/icons/en-lang.svg"
                  alt="English"
                  width={24}
                  height={16}
                />
                <Image
                  src="/icons/caret-down.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
            {footerMenu.map((group) => (
              <div key={group.title}>
                <Description
                  className="mb-2.5 tracking-[-0.076px] max-lg:text-base max-lg:mb-5.5"
                  size="13"
                  variant="dark"
                >
                  {group.title}
                </Description>
                <NavigationMenu className="flex-none">
                  <NavigationMenuList className="flex-col items-start gap-2.5 max-lg:gap-4.5">
                    {group.items.map((item) => (
                      <NavigationMenuItem key={item.id}>
                        <NavigationMenuLink
                          active={pathname === item.href}
                          className="p-0 text-mid-gray text-sm"
                          render={<Link href={item.href} />}
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            ))}
            <div>
              <Description
                className="mb-2.5 tracking-[-0.076px] max-lg:text-base max-lg:mb-5.5"
                size="13"
                variant="dark"
              >
                Contact
              </Description>
              <ul className="space-y-2.5 max-lg:space-y-4.5">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-mid-gray text-sm hover:text-blue"
                  >
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-mid-gray text-sm hover:text-blue"
                  >
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <span className="text-mid-gray text-sm">
                    {contact.address}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <Description
                className="mb-2.5 tracking-[-0.076px] max-lg:text-base max-lg:mb-5.5"
                size="13"
                variant="dark"
              >
                Follow Us
              </Description>
              <ul className="space-y-2.5 max-lg:space-y-4.5">
                {socials.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mid-gray text-sm hover:text-blue"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-6 flex flex-wrap items-center justify-between gap-y-8 gap-x-4 max-md:justify-center">
          <Description size="13" variant="muted">
            © {new Date().getFullYear()} CALL CENTER INP. All rights reserved.
          </Description>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalMenu.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-[13px] text-muted hover:text-blue"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
