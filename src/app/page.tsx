import { siteConfig } from '@/lib/config';
import { getTheme, getBackground } from '@/lib/themes';
import { ProfileSection } from '@/components/profile-section';
import { LinkList } from '@/components/link-list';
import { SocialBar } from '@/components/social-bar';
import { ContentEmbed } from '@/components/content-embed';
import { Footer } from '@/components/footer';

export default function Home() {
  const theme = getTheme(siteConfig.theme);
  const bgStyle = siteConfig.bgStyle || 'light';

  return (
    <main id="main"
      className={`min-h-screen flex flex-col items-center justify-center p-4${bgStyle === 'gradient' ? ' animate-gradient' : ''}`}
      style={getBackground(theme, bgStyle)}
    >
      <div className="w-full max-w-md sm:max-w-lg mx-auto flex flex-col items-center gap-6 py-12">
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