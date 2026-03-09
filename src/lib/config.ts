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

/** 배경 스타일: light | gradient | solid | mesh | aurora | glass | dark */
export type BgStyle = 'light' | 'gradient' | 'solid' | 'mesh' | 'aurora' | 'glass' | 'dark';
/** 카드 스타일: rounded | pill | square | glass | neon */
export type CardStyle = 'rounded' | 'pill' | 'square' | 'glass' | 'neon';
/** 폰트 패밀리: system | serif | mono | display */
export type FontFamily = 'system' | 'serif' | 'mono' | 'display';

const DEMO_LINKS: LinkItem[] = [
  {
    title: '내 블로그',
    titleEn: 'My Blog',
    url: 'https://blog.example.com',
    icon: 'pen-line',
  },
  {
    title: 'YouTube 채널',
    titleEn: 'YouTube Channel',
    url: 'https://youtube.com',
    icon: 'youtube',
  },
  {
    title: '인스타그램',
    titleEn: 'Instagram',
    url: 'https://instagram.com',
    icon: 'instagram',
  },
  {
    title: '포트폴리오',
    titleEn: 'Portfolio',
    url: 'https://portfolio.example.com',
    icon: 'briefcase',
  },
  {
    title: '커피챗 예약',
    titleEn: 'Book a Coffee Chat',
    url: 'https://calendly.com',
    icon: 'coffee',
  }
];

const _basePath = process.env.NEXT_PUBLIC_REPO_NAME ? `/${process.env.NEXT_PUBLIC_REPO_NAME}` : '';

function parseJSON<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || '김호수',
  siteNameEn: process.env.NEXT_PUBLIC_SITE_NAME_EN || 'Minji',
  bio: process.env.NEXT_PUBLIC_BIO || '일상을 기록하는 콘텐츠 크리에이터',
  bioEn: process.env.NEXT_PUBLIC_BIO_EN || 'Content creator documenting everyday life',
  avatarUrl: process.env.NEXT_PUBLIC_AVATAR_URL || 'https://plus.unsplash.com/premium_photo-1664475228198-ffce9c2b6a41?w=200&q=85&auto=format&fit=crop&crop=faces&facepad=2',
  theme: process.env.NEXT_PUBLIC_THEME || 'dark',
  bgStyle: (process.env.NEXT_PUBLIC_BG_STYLE || 'dark') as BgStyle,
  primaryColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR || '#ffffff',
  cardStyle: (process.env.NEXT_PUBLIC_CARD_STYLE || 'outline') as CardStyle,
  fontFamily: (process.env.NEXT_PUBLIC_FONT_FAMILY || 'mono') as FontFamily,
  links: parseJSON<LinkItem[]>(process.env.NEXT_PUBLIC_LINKS, DEMO_LINKS),
  socials: parseJSON<SocialItem[]>(process.env.NEXT_PUBLIC_SOCIALS, [
  { platform: 'instagram', url: 'https://instagram.com' },
  { platform: 'youtube', url: 'https://youtube.com' }
]),
  youtubeUrl: process.env.NEXT_PUBLIC_YOUTUBE_URL || null,
  gaId: process.env.NEXT_PUBLIC_GA_ID || null,
};

export type SiteConfig = typeof siteConfig;
