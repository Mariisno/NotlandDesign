import React from 'react';
import { ExperienceItem, SectionHeader } from './CVParts';

export function SectionDivider() {
  return <hr style={{border: 0, borderTop: '1.5px solid #e6ede7', margin: '16px 0 0 0'}}/>;
}

export function ExperienceList({ items }: { items: Array<{ date: string, title: string, org?: string, children?: React.ReactNode }> }) {
  return (
    <>
      {items.map((item, idx) => (
        <React.Fragment key={item.date + item.title}>
          <ExperienceItem date={item.date} title={item.title} org={item.org}>
            {item.children}
          </ExperienceItem>
          {idx < items.length - 1 && <SectionDivider />}
        </React.Fragment>
      ))}
    </>
  );
}

export function CVSection({ header, right, children, style }: { header: React.ReactNode, right?: React.ReactNode, children: React.ReactNode, style?: React.CSSProperties }) {
  return (
    <section style={{marginBottom: 32, ...style}}>
      <SectionHeader right={right}>{header}</SectionHeader>
      {children}
    </section>
  );
}

export function LangSwitch({ lang, setLang }: { lang: string, setLang: (l: string) => void }) {
  return (
    <div style={{display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16}}>
      <button onClick={() => setLang('no')} disabled={lang === 'no'} style={{fontWeight: lang === 'no' ? 700 : 400}}>Norsk</button>
      <span style={{color: '#aaa'}}>|</span>
      <button onClick={() => setLang('en')} disabled={lang === 'en'} style={{fontWeight: lang === 'en' ? 700 : 400}}>English</button>
    </div>
  );
}
