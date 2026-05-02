'use client';

import type { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

function buildAndroidIntentUrl(webUrl: string) {
  const normalized = webUrl.trim();
  if (!/^https?:\/\//i.test(normalized)) return normalized;

  const noScheme = normalized.replace(/^https?:\/\//i, '');
  const fallback = encodeURIComponent(normalized);

  return `intent://${noScheme}#Intent;scheme=https;package=com.zhiliaoapp.musically;S.browser_fallback_url=${fallback};end`;
}

export default function SocialLink({ href, children, className, ariaLabel }: Props) {
  const isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
  const finalHref = isAndroid ? buildAndroidIntentUrl(href) : href;

  return (
    <a
      href={finalHref}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

