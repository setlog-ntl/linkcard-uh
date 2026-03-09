export interface LinkItem {
  title: string;
  titleEn?: string;
  url: string;
  icon?: string;
}

export interface SocialItem {
  platform: string;
  url: string;
}

const DEMO_LINKS: LinkItem[] = [
  { title: '내 블로그', titleEn: 'My Blog', url: 'https://blog.example.com', icon: 'pen-line' },
  { title: 'YouTube 채널', titleEn: 'YouTube Channel', url: 'https://youtube.com', icon: 'youtube' },
  { title: '인스타그램', titleEn: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
  { title: '포트폴리오', titleEn: 'Portfolio', url: 'https://portfolio.example.com', icon: 'briefcase' },
  { title: '커피챗 예약', titleEn: 'Book a Coffee Chat', url: 'https://calendly.com', icon: 'coffee' },
];

function parseJSON<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || '민지 (Minji)',
  siteNameEn: process.env.NEXT_PUBLIC_SITE_NAME_EN || 'Minji',
  bio: process.env.NEXT_PUBLIC_BIO || '일상을 기록하는 콘텐츠 크리에이터',
  bioEn: process.env.NEXT_PUBLIC_BIO_EN || 'Content creator documenting everyday life',
  avatarUrl: process.env.NEXT_PUBLIC_AVATAR_URL || 'https://plus.unsplash.com/premium_photo-1664475228198-ffce9c2b6a41?w=200&q=85&auto=format&fit=crop&crop=faces&facepad=2',
  theme: process.env.NEXT_PUBLIC_THEME || 'minimal',
  bgStyle: process.env.NEXT_PUBLIC_BG_STYLE || 'light',
  cardStyle: process.env.NEXT_PUBLIC_CARD_STYLE || 'rounded',
  primaryColor: '#6366f1',
  links: parseJSON<LinkItem[]>(process.env.NEXT_PUBLIC_LINKS, DEMO_LINKS),
  socials: parseJSON<SocialItem[]>(process.env.NEXT_PUBLIC_SOCIALS, []),
  youtubeUrl: process.env.NEXT_PUBLIC_YOUTUBE_URL || null,
  gaId: process.env.NEXT_PUBLIC_GA_ID || null,
};

export type SiteConfig = typeof siteConfig;