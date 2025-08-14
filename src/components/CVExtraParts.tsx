import React from 'react';

export function CVCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      maxWidth: 600,
      margin: '0 auto',
      color: '#333',
      fontSize: '1.05em',
      lineHeight: 1.7,
      minHeight: 'auto',
      maxHeight: 'none',
      display: 'block',
      textAlign: 'left',
      overflow: 'visible',
      background: 'none',
      boxShadow: 'none',
      borderRadius: 0,
      padding: 0,
    }}>
      {children}
    </div>
  );
}

export function PDFDownloadButton({ lang }: { lang: string }) {
  return (
    <a
      href="/cv.pdf"
      download
      style={{
        background: 'var(--accent-green)',
        color: '#fff',
        border: 'none',
        borderRadius: '0.7em',
        padding: '0.5em 1.1em',
        fontWeight: 600,
        fontSize: '1em',
        textDecoration: 'none',
        boxShadow: '0 1px 6px #b7c8b522',
        transition: 'background 0.2s',
        marginLeft: '1em',
        display: 'inline-block',
      }}
    >
      {lang === 'no' ? 'Last ned CV (PDF)' : 'Download CV (PDF)'}
    </a>
  );
}

export function CVTabNav({ tab, setTab, lang }: { tab: string, setTab: (t: string) => void, lang: string }) {
  return (
    <nav className="cv-tabs" style={{margin: '0 auto 1.5em auto', maxWidth: 600, position: 'relative', top: 0, zIndex: 10}}>
      <button className={tab === 'experience' ? 'cv-tab active' : 'cv-tab'} onClick={() => setTab('experience')}>{lang === 'no' ? 'Erfaring' : 'Experience'}</button>
      <button className={tab === 'education' ? 'cv-tab active' : 'cv-tab'} onClick={() => setTab('education')}>{lang === 'no' ? 'Utdanning' : 'Education'}</button>
      <button className={tab === 'positions' ? 'cv-tab active' : 'cv-tab'} onClick={() => setTab('positions')}>{lang === 'no' ? 'Verv' : 'Positions'}</button>
      <button className={tab === 'skills' ? 'cv-tab active' : 'cv-tab'} onClick={() => setTab('skills')}>{lang === 'no' ? 'Ferdigheter/Verktøy' : 'Skills/Tools'}</button>
    </nav>
  );
}

export function SkillList({ lang }: { lang: string }) {
  return (
    <ul style={{margin: 0, padding: 0, listStyle: 'none', textAlign: 'left', fontSize: '1.08em', width: '100%'}}>
      {lang === 'no' ? (
        <>
          <li>Figma</li>
          <li>Utarbeiding og vedlikehold av designsystem</li>
          <li>Prototyping og analyse</li>
          <li>Design Thinking</li>
          <li>Scrum og smidig metodikk</li>
          <hr style={{border: 0, borderTop: '2px solid #e6ede7', margin: '12px 0'}}/>
          <li>GitHub</li>
          <li>Python</li>
          <li>Java</li>
          <li>Kotlin</li>
          <li>React</li>
          <li>Android Studio & VS Code</li>
        </>
      ) : (
        <>
          <li>Figma</li>
          <li>Design system development & maintenance</li>
          <li>Prototyping and analysis</li>
          <li>Design Thinking</li>
          <li>Scrum and agile methodology</li>
          <hr style={{border: 0, borderTop: '2px solid #e6ede7', margin: '12px 0'}}/>
          <li>GitHub</li>
          <li>Python</li>
          <li>Java</li>
          <li>Kotlin</li>
          <li>React</li>
          <li>Android Studio & VS Code</li>
        </>
      )}
    </ul>
  );
}
