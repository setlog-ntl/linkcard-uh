import { ThemeToggle } from './theme-toggle';
import { LanguageToggle } from './language-toggle';
import type { ThemePreset } from '@/lib/themes';

interface Props {
  theme: ThemePreset;
}

export function Footer({ theme }: Props) {
  return (
    <footer
      className="flex items-center gap-2 pt-8 text-xs"
      style={{ color: theme.textMuted }}
    >
      <a
        href="https://www.linkmap.biz/sites?utm_source=badge&utm_medium=referral&utm_campaign=link-card"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all text-[11px] font-medium hover:opacity-80"
        style={{ borderWidth: 1, borderStyle: 'solid', borderColor: theme.textMuted + '33', color: theme.textMuted }}
        aria-label="Made with Linkmap"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        Made with Linkmap
      </a>
      <LanguageToggle theme={theme} />
      <ThemeToggle />
    </footer>
  );
}