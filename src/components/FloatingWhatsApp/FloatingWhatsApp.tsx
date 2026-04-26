import styles from './FloatingWhatsApp.module.css';
import { SHOWROOM_PHONE_DISPLAY, SHOWROOM_PHONE_WA } from '../../lib/contact';

export default function FloatingWhatsApp() {
  return (
    <a
      className={styles.floating}
      href={`https://wa.me/${SHOWROOM_PHONE_WA}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat WhatsApp ${SHOWROOM_PHONE_DISPLAY}`}
      title={`Chat WhatsApp ${SHOWROOM_PHONE_DISPLAY}`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.04 2C6.54 2 2.06 6.47 2.06 11.98c0 1.77.46 3.49 1.35 5L2 22l5.15-1.35a9.94 9.94 0 0 0 4.89 1.25h.01c5.5 0 9.98-4.47 9.98-9.98S17.55 2 12.04 2zm5.8 14.45c-.24.68-1.38 1.29-1.9 1.38-.49.09-1.11.13-1.79-.09-.41-.13-.93-.3-1.61-.59-2.83-1.22-4.67-4.08-4.81-4.27-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.42-.07.65.49.24.58.82 2 .89 2.14.07.14.12.31.02.5-.09.19-.14.31-.29.47-.14.16-.31.35-.44.46-.15.13-.31.27-.13.53.18.26.79 1.3 1.7 2.11 1.16 1.03 2.13 1.35 2.39 1.5.26.14.41.12.56-.07.15-.19.64-.75.81-1.01.17-.26.35-.21.58-.13.24.08 1.51.71 1.77.84.26.13.44.19.5.3.06.12.06.68-.18 1.36z"
        />
      </svg>
      <span>Chat WhatsApp</span>
    </a>
  );
}
