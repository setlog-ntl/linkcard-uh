import { siteConfig } from '@/lib/config';
import { getTheme, getBackground } from '@/lib/themes';
import { ProfileSection } from '@/components/profile-section';
import { LinkList } from '@/components/link-list';
import { SocialBar } from '@/components/social-bar';
import { ContentEmbed } from '@/components/content-embed';
import { Footer } from '@/components/footer';

function getFontClass(fontFamily: string): string {
  switch (fontFamily) {
    case 'serif': return 'font-serif';
    case 'mono': return 'font-mono';
    case 'display': return 'font-display';
    default: return 'font-sans';
  }
}

export default function Home() {
  const theme = getTheme(siteConfig.theme);
  const bgStyle = siteConfig.bgStyle || 'light';
  const fontClass = getFontClass(siteConfig.fontFamily || 'system');
  const isAnimated = bgStyle === 'gradient' || bgStyle === 'aurora';
  const isDark = bgStyle === 'dark';

  return (
    <main id="main"
      className={`min-h-screen flex flex-col items-center justify-center p-4 ${fontClass}${isAnimated ? ' animate-gradient' : ''}${isDark ? ' dark' : ''}`}
      style={getBackground(theme, bgStyle)}
    >
      <div className="w-full max-w-md mx-auto flex flex-col items-center gap-6 py-12">
        <ProfileSection config={siteConfig} theme={theme} />
        <LinkList links={siteConfig.links} theme={theme} />
        {siteConfig.socials.length > 0 && (
          <SocialBar socials={siteConfig.socials} theme={theme} />
        )}
        {siteConfig.youtubeUrl && (
          <ContentEmbed youtubeUrl={siteConfig.youtubeUrl} />
        )}
        <Footer theme={theme} />
      </div>
    </main>
  );
}
