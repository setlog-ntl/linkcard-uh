'use client';

import {
  Youtube,
  PenLine,
  Briefcase,
  ShoppingBag,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';
import { siteConfig, type LinkItem } from '@/lib/config';
import { getCardRadius, type ThemePreset } from '@/lib/themes';
import { useLocale } from '@/lib/i18n';

const iconMap: Record<string, LucideIcon> = {
  youtube: Youtube,
  'pen-line': PenLine,
  briefcase: Briefcase,
  'shopping-bag': ShoppingBag,
};

interface Props {
  links: LinkItem[];
  theme: ThemePreset;
}

export function LinkList({ links, theme }: Props) {
  const { locale } = useLocale();

  return (
    <div className="w-full flex flex-col gap-3">
      {links.map((link, i) => {
        const Icon = iconMap[link.icon || ''] || ExternalLink;
        const title = locale === 'en' && link.titleEn ? link.titleEn : link.title;
        return (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`link-card card-lift btn-press flex items-center gap-3 px-5 py-3.5 backdrop-blur-sm shadow-sm group transition-all duration-200${(siteConfig.cardStyle === 'glass' || siteConfig.cardStyle === 'neon') ? ' hover-glow' : ''}`}
            style={{
              backgroundColor: theme.cardBg,
              border: `1px solid ${theme.cardBorder}`,
              color: theme.text,
              borderRadius: getCardRadius(siteConfig.cardStyle || 'rounded'),
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = theme.primary + '66'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = theme.cardBorder; }}
          >
            <Icon className="w-5 h-5 shrink-0" />
            <span className="text-sm sm:text-base font-medium flex-1">
              {title}
            </span>
            <ExternalLink className="w-4 h-4 opacity-40 shrink-0 arrow-slide" />
          </a>
        );
      })}
    </div>
  );
}