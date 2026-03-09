'use client';

import type { SiteConfig } from '@/lib/config';
import type { ThemePreset } from '@/lib/themes';
import { useLocale } from '@/lib/i18n';

interface Props {
  config: SiteConfig;
  theme: ThemePreset;
}

export function ProfileSection({ config, theme }: Props) {
  const { locale } = useLocale();
  const name = locale === 'en' && config.siteNameEn ? config.siteNameEn : config.siteName;
  const bio = locale === 'en' && config.bioEn ? config.bioEn : config.bio;

  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {config.avatarUrl ? (
        <div className="avatar-ring" style={{ ['--color-primary' as string]: theme.primary, ['--color-secondary' as string]: theme.primary }}>
          <img
            src={config.avatarUrl}
            alt={name}
            width={96}
            height={96}
            className="w-24 h-24 rounded-full object-cover ring-2 ring-[var(--color-primary)]/20 transition-transform duration-200 hover:scale-105"
            style={{ ['--color-primary' as string]: theme.primary, boxShadow: `0 0 30px ${theme.primary}66` }}
          />
        </div>
      ) : (
        <div
          className="avatar-ring w-24 h-24"
          style={{ ['--color-primary' as string]: theme.primary, ['--color-secondary' as string]: theme.primary }}
        >
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold ring-2 ring-[var(--color-primary)]/20 transition-transform duration-200 hover:scale-105"
            style={{ ['--color-primary' as string]: theme.primary, backgroundColor: theme.primary, color: '#fff', boxShadow: `0 0 30px ${theme.primary}66` }}
            aria-label={name}
          >
            {initials}
          </div>
        </div>
      )}
      <h1 className="text-2xl font-bold" style={{ color: theme.text }}>
        {name}
      </h1>
      <p className="text-base max-w-xs text-balance" style={{ color: theme.textMuted }}>
        {bio}
      </p>
    </div>
  );
}