import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <div className={styles.brand}>JAECOO</div>
          <p className={styles.tagline}>Beyond the Horizon.</p>
        </div>
        <div className={styles.links}>
          <div>
            <h5>Explore</h5>
            <a href="#models">Models</a>
            <a href="#specs">Specifications</a>
            <a href="#finance">Financing</a>
            <a href="#compare">Compare</a>
          </div>
          <div>
            <h5>Support</h5>
            <a href="#dealers">Dealers</a>
            <a href="#contact">Book Test Drive</a>
            <a href="#">FAQ</a>
            <a href="#">Contact Us</a>
          </div>
          <div>
            <h5>Legal</h5>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        © 2025 JAECOO Indonesia. All rights reserved. Prices are indicative and may vary by dealer.
      </div>
    </footer>
  );
}