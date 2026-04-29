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
  { label: 'Dealers', href: '/#dealers' },
  // { label: 'Book Test Drive', href: '/book-test-drive' },
];

export default function Nav() {
  const [navLinks, setNavLinks] = useState<NavLinkItem[]>(fallbackLinks);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const promoText = '';

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
      } catch {
        // Keep fallback links when API is unavailable.
      }
    };

    loadLinks();
  }, []);

  return (
    <>
      {promoText && <div className={styles.banner}>{promoText}</div>}
      <nav className={`${styles.nav} ${promoText ? styles.navWithBanner : ''}`}>
        <Link href="/" className={styles.brand}>JAECOO</Link>
        <div className={styles.links}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={styles.spacer} aria-hidden="true" />
      </nav>
      {isMobileMenuOpen && (
        <div className={`${styles.mobileMenu} ${promoText ? styles.mobileMenuWithBanner : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={`mobile-${link.href}`}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}