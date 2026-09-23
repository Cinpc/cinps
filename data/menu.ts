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
    id: 'explore',
    items: getMenuItems(['services', 'solutions', 'contact']),
  },
  {
    id: 'company',
    items: getMenuItems(['process', 'company']),
  },
];

export const legalMenu: MenuItem[] = [
  {
    id: 'terms-conditions',
    href: '/terms-conditions',
    label: 'Terms & Conditions',
  },
  { id: 'privacy-policy', href: '/privacy-policy', label: 'Privacy Policy' },
  { id: 'cookie-policy', href: '/cookie-policy', label: 'Cookie Policy' },
  { id: 'refund-policy', href: '/refund-policy', label: 'Refund Policy' },
];
