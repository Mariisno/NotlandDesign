import { useContext, useState } from 'react';
import { LanguageContext } from '../Layout';

function CV() {
  const { lang } = useContext(LanguageContext);
  const [tab, setTab] = useState('education');

  // Common card style for all tabs
  const cardStyle: React.CSSProperties = {
    background: '#fff',
    borderRadius: '1em',
    boxShadow: '0 1px 8px #b7c8b522',
    padding: '2em 1.5em',
    maxWidth: 600,
    margin: '0 auto',
    color: '#333',
    fontSize: '1.05em',
    lineHeight: 1.7,
  minHeight: '650px',
    transition: 'min-height 0.3s',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'flex-start' as const,
    alignItems: 'flex-start',
    textAlign: 'left',
  };

  return (
  <section className="cv-section" style={{maxWidth: 800, margin: '3em auto 2em auto', background: '#f4f6f3', borderRadius: '1.2em', boxShadow: '0 2px 12px 0 #b7c8b544', padding: 0, overflow: 'hidden', minHeight: '60vh', position: 'relative'}}>
      <nav style={{display: 'flex', justifyContent: 'center', gap: '2em', background: '#e6ede7', borderBottom: '1.5px solid #b7c8b5', padding: '1.2em 0 1em 0', borderTopLeftRadius: '1.2em', borderTopRightRadius: '1.2em', position: 'sticky', top: '4.5em', zIndex: 10}}>
        <button className={tab === 'education' ? 'icon-btn active' : 'icon-btn'} onClick={() => setTab('education')}>{lang === 'no' ? 'Utdanning' : 'Education'}</button>
        <button className={tab === 'experience' ? 'icon-btn active' : 'icon-btn'} onClick={() => setTab('experience')}>{lang === 'no' ? 'Erfaring' : 'Experience'}</button>
        <button className={tab === 'positions' ? 'icon-btn active' : 'icon-btn'} onClick={() => setTab('positions')}>{lang === 'no' ? 'Verv' : 'Positions'}</button>
        <button className={tab === 'skills' ? 'icon-btn active' : 'icon-btn'} onClick={() => setTab('skills')}>{lang === 'no' ? 'Ferdigheter/Verktøy' : 'Skills/Tools'}</button>
      </nav>
      <div style={{padding: '2.5em 2em'}}>
        {tab === 'education' && (
          <div style={cardStyle}>
            <h2 style={{color: 'var(--accent-green)', marginTop: 0}}>{lang === 'no' ? 'Utdanning' : 'Education'}</h2>
            <ul style={{margin: 0, padding: 0, listStyle: 'none', textAlign: 'left'}}>
              <li style={{marginBottom: 12}}><span style={{background: '#d6f5d6', borderRadius: 4, padding: '0.1em 0.5em', fontSize: '0.95em', color: '#355c47'}}>2022 - 2024</span><br/><b>Bachelor, informatikk, design bruk og interaksjon</b><br/>Universitetet i Oslo</li>
              <li style={{marginBottom: 12}}><span style={{background: '#d6f5d6', borderRadius: 4, padding: '0.1em 0.5em', fontSize: '0.95em', color: '#355c47'}}>2020 - 2022</span><br/><b>Bachelor i psykologi</b><br/>Norges teknisk-naturvitenskapelige universitet</li>
              <li><span style={{background: '#d6f5d6', borderRadius: 4, padding: '0.1em 0.5em', fontSize: '0.95em', color: '#355c47'}}>2019 - 2020</span><br/><b>Årsstudie i spansk, historie og filosofi</b><br/>Universidad Nacional de San Martín</li>
            </ul>
          </div>
        )}
        {tab === 'experience' && (
          <div style={cardStyle}>
            <h2 style={{color: 'var(--accent-green)', marginTop: 0}}>{lang === 'no' ? 'Relevant erfaring' : 'Relevant Experience'}</h2>
            <div style={{marginBottom: '2em', paddingBottom: 12, borderBottom: '1px solid #e6ede7'}}>
              <b>UX Designer & Scrum Master</b>
              <div style={{display: 'flex', alignItems: 'center', gap: 8, margin: '0.2em 0'}}>
                <span style={{background: '#d6f5d6', color: '#355c47', borderRadius: 6, padding: '0.1em 0.7em', fontSize: '0.95em'}}>Juli 2024 - nå</span>
                <span style={{color: '#555'}}>Aibel AS</span>
              </div>
              <div style={{fontSize: '0.98em', color: '#333', marginTop: 8, textAlign: 'left'}}>
                Jobber hovedsakelig som UX designer hvor jeg leder designprosessen fra start til slutt. Som UX designer gjør jeg alt fra innsikt, analyse, prototyping, tester og vedlikeholder designsystemet vi bruker.
                <br/><br/>
                I tillegg er jeg scrum master for teamene jeg er UX designer i, som vil si at jeg fasiliterer møter som retro, standup og sprintplanning. I tillegg gjør jeg prioriteringer og har nært samarbeid med produkteierne.
              </div>
            </div>
            <div style={{marginBottom: '2em', paddingBottom: 12, borderBottom: '1px solid #e6ede7'}}>
              <b>IT support technician</b>
              <div style={{display: 'flex', alignItems: 'center', gap: 8, margin: '0.2em 0'}}>
                <span style={{background: '#d6f5d6', color: '#355c47', borderRadius: 6, padding: '0.1em 0.7em', fontSize: '0.95em'}}>Juli 2023 - mai 2024</span>
                <span style={{color: '#555'}}>Advania</span>
              </div>
              <div style={{fontSize: '0.98em', color: '#333', marginTop: 8}}>
                Jobbet med å hjelpe brukere som ringte inn med ulike tekniske problemer.
              </div>
            </div>
            <h2 style={{color: 'var(--accent-green)', fontSize: '1.1em', marginTop: 32}}>Annen erfaring</h2>
            <div style={{marginBottom: '2em', paddingBottom: 12, borderBottom: '1px solid #e6ede7'}}>
              <b>Kantinemedarbeider</b>
              <div style={{display: 'flex', alignItems: 'center', gap: 8, margin: '0.2em 0'}}>
                <span style={{background: '#d6f5d6', color: '#355c47', borderRadius: 6, padding: '0.1em 0.7em', fontSize: '0.95em'}}>september 2021 - juni 2022</span>
                <span style={{color: '#555'}}>Sit-Kafé</span>
              </div>
            </div>
            <div style={{marginBottom: '2em', paddingBottom: 12, borderBottom: '1px solid #e6ede7'}}>
              <b>Pleiemedarbeider</b>
              <div style={{display: 'flex', alignItems: 'center', gap: 8, margin: '0.2em 0'}}>
                <span style={{background: '#d6f5d6', color: '#355c47', borderRadius: 6, padding: '0.1em 0.7em', fontSize: '0.95em'}}>september 2021 - juni 2022</span>
                <span style={{color: '#555'}}>Nordre Follo Kommune</span>
              </div>
            </div>
            <div style={{marginBottom: 0}}>
              <b>Barnehagevikar</b>
              <div style={{display: 'flex', alignItems: 'center', gap: 8, margin: '0.2em 0'}}>
                <span style={{background: '#d6f5d6', color: '#355c47', borderRadius: 6, padding: '0.1em 0.7em', fontSize: '0.95em'}}>juni 2021 - juli 2022 & juni 2018 - juli 2018</span>
                <span style={{color: '#555'}}>Nordre Follo Kommune</span>
              </div>
            </div>
          </div>
        )}
        {tab === 'positions' && (
          <div style={cardStyle}>
            <h2 style={{color: 'var(--accent-green)', marginTop: 0}}>{lang === 'no' ? 'Verv' : 'Positions'}</h2>
            <ul style={{margin: 0, padding: 0, listStyle: 'none', textAlign: 'left'}}>
              <li style={{marginBottom: 12}}><span style={{background: '#d6f5d6', borderRadius: 4, padding: '0.1em 0.5em', fontSize: '0.95em', color: '#355c47'}}>sep. 2022 - mai 2024</span><br/><b>Intern & Promoteringsansvarlig</b><br/>Defi (Linjeforeningen for design)</li>
              <li><span style={{background: '#d6f5d6', borderRadius: 4, padding: '0.1em 0.5em', fontSize: '0.95em', color: '#355c47'}}>sep. 2021 - sep. 2023</span><br/><b>Promoteringsansvarlig</b><br/>Bedriftsportalen for psykologi</li>
            </ul>
          </div>
        )}
        {tab === 'skills' && (
          <div style={cardStyle}>
            <h2 style={{color: 'var(--accent-green)', marginTop: 0}}>{lang === 'no' ? 'Ferdigheter/Verktøy' : 'Skills/Tools'}</h2>
            <ul style={{margin: 0, padding: 0, listStyle: 'none', textAlign: 'left'}}>
              <li>Figma</li>
              <li>Designsystem</li>
              <li>Prototyping</li>
              <li>Design Thinking</li>
              <li>Scrum</li>
              <li>GitHub</li>
              <li>Python</li>
              <li>Java</li>
              <li>Kotlin</li>
              <li>Android Studio & VS Code</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default CV;
