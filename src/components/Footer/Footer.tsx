import styles from './Footer.module.css';
import { SOCIAL_LINKS } from '../../lib/contact';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <div className={styles.brand}>JAECOO</div>
          <p className={styles.tagline}>Beyond the Horizon.</p>
        </div>
        <div className={styles.links}>
          <div className={styles.linkColumn}>
            <h5>Explore</h5>
            <a href="/#hero">Home</a>
            <a href="/#models">Models</a>
            <a href="/compare">Compare</a>
            <a href="/#testimonials">Testimoni</a>
          </div>
          <div className={styles.linkColumn}>
            <h5>Quick Actions</h5>
            <a href="/#final-cta">Why Choose Us</a>
            <a href="/#contact">Book Test Drive</a>
            <a href="/models">All Models</a>
          </div>
          <div className={styles.linkColumn}>
            <h5>Contact</h5>
            <div className={styles.socials}>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8A3.2 3.2 0 1 0 12 15.2a3.2 3.2 0 0 0 0-6.4z" />
                </svg>
                <span>Instagram</span>
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M14.4 2h2.45a4.52 4.52 0 0 0 3.1 3.13v2.5a7.03 7.03 0 0 1-3.1-.73v7.2A6.1 6.1 0 1 1 10.75 8v2.61a3.5 3.5 0 1 0 3.65 3.49V2z" />
                </svg>
                <span>TikTok</span>
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M13.2 21v-7.7h2.6l.4-3h-3V8.4c0-.87.25-1.46 1.5-1.46h1.6V4.25c-.28-.04-1.22-.12-2.32-.12-2.3 0-3.88 1.4-3.88 3.98v2.2H7.5v3h2.6V21h3.1z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        © 2026 JAECOO Indonesia. All rights reserved. Prices are indicative and may vary by dealer.
      </div>
    </footer>
  );
}