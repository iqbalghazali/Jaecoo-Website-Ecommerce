'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from './Nav.module.css';

type NavLinkItem = {
  label: string;
  href: string;
};

const fallbackLinks: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Models', href: '/models' },
  { label: 'Specs', href: '/specs' },
  // { label: 'Finance', href: '/finance' },
  { label: 'Compare', href: '/compare' },
  // { label: 'Dealers', href: '/dealers' },
  // { label: 'Book Test Drive', href: '/book-test-drive' },
];

const fallbackModelLinks: NavLinkItem[] = [
  { label: 'J7', href: '/models#model-j7' },
  { label: 'J6', href: '/models#model-j6' },
  { label: 'J8', href: '/models#model-j8' },
];

const fallbackCompareLinks: NavLinkItem[] = [

]

export default function Nav() {
  const [navLinks, setNavLinks] = useState<NavLinkItem[]>(fallbackLinks);
  const [modelLinks, setModelLinks] = useState<NavLinkItem[]>(fallbackModelLinks);

  useEffect(() => {
    const loadLinks = async () => {
      try {
        const response = await fetch('/api/navigation');
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as {
          links?: NavLinkItem[];
          modelLinks?: NavLinkItem[];
        };
        if (Array.isArray(data.links) && data.links.length > 0) {
          setNavLinks(data.links);
        }
        if (Array.isArray(data.modelLinks) && data.modelLinks.length > 0) {
          setModelLinks(data.modelLinks);
        }
      } catch {
        // Keep fallback links when API is unavailable.
      }
    };

    loadLinks();
  }, []);

  return (
    <>
      <div className={styles.banner}>
        🎉 Special Launch Offer — 0% Interest for 24 Months on JAECOO J7 — Limited Time Only
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>JAECOO</Link>
        <div className={styles.links}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className={styles.modelLinks}>
          {modelLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}