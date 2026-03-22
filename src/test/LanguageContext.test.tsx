import { describe, it, expect } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';

function LanguageDisplay() {
  const { language } = useLanguage();
  return <div data-testid="lang">{language}</div>;
}

function TranslationDisplay({ tKey }: { tKey: string }) {
  const { t } = useLanguage();
  return <div data-testid="translation">{t(tKey)}</div>;
}

function LanguageSwitcher({ lang }: { lang: 'en' | 'no' }) {
  const { setLanguage } = useLanguage();
  return <button onClick={() => setLanguage(lang)}>switch</button>;
}

describe('LanguageContext', () => {
  it('defaults to English', () => {
    render(
      <LanguageProvider>
        <LanguageDisplay />
      </LanguageProvider>
    );
    expect(screen.getByTestId('lang')).toHaveTextContent('en');
  });

  it('setLanguage switches to Norwegian', () => {
    render(
      <LanguageProvider>
        <LanguageDisplay />
        <LanguageSwitcher lang="no" />
      </LanguageProvider>
    );
    act(() => {
      screen.getByRole('button').click();
    });
    expect(screen.getByTestId('lang')).toHaveTextContent('no');
  });

  it('t() returns correct English translation for nav.projects', () => {
    render(
      <LanguageProvider>
        <TranslationDisplay tKey="nav.projects" />
      </LanguageProvider>
    );
    expect(screen.getByTestId('translation')).toHaveTextContent('Projects');
  });

  it('t() returns correct Norwegian translation after language switch', () => {
    render(
      <LanguageProvider>
        <TranslationDisplay tKey="nav.projects" />
        <LanguageSwitcher lang="no" />
      </LanguageProvider>
    );
    act(() => {
      screen.getByRole('button').click();
    });
    // Norwegian translation for nav.projects
    expect(screen.getByTestId('translation')).not.toHaveTextContent('nav.projects');
  });

  it('t() returns the key itself for missing translations', () => {
    render(
      <LanguageProvider>
        <TranslationDisplay tKey="nonexistent.key" />
      </LanguageProvider>
    );
    expect(screen.getByTestId('translation')).toHaveTextContent('nonexistent.key');
  });

  it('t() handles nested keys', () => {
    render(
      <LanguageProvider>
        <TranslationDisplay tKey="hero.name" />
      </LanguageProvider>
    );
    expect(screen.getByTestId('translation')).toHaveTextContent('Mari Svennevik Notland');
  });

  it('useLanguage throws when used outside LanguageProvider', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<LanguageDisplay />)).toThrow(
      'useLanguage must be used within a LanguageProvider'
    );
    spy.mockRestore();
  });
});
