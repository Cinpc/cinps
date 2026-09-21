export type MenuItem = {
  id: string;
  href: string;
  label: string;
};

export const menu: MenuItem[] = [
  { id: 'home', href: '/', label: 'Home' },
  { id: 'services', href: '/services', label: 'Services' },
  { id: 'solutions', href: '/solutions', label: 'Solutions' },
  { id: 'process', href: '/process', label: 'Process' },
  { id: 'company', href: '/company', label: 'Company' },
  { id: 'contact', href: '/contact', label: 'Contact' },
];

export function getMenuItems(ids: string[]) {
  return ids.flatMap((id) => menu.filter((item) => item.id === id));
}

export const footerMenu = [
  {
    title: 'Explore',
    items: getMenuItems(['services', 'solutions', 'contact']),
  },
  {
    title: 'Company',
    items: getMenuItems(['process', 'company']),
  },
];

export const legalMenu: MenuItem[] = [
  { id: 'terms', href: '/terms', label: 'Terms & Conditions' },
  { id: 'privacy', href: '/privacy', label: 'Privacy Policy' },
  { id: 'cookies', href: '/cookies', label: 'Cookie Policy' },
];
