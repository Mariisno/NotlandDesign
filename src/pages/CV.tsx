import { useContext, useState } from 'react';
import { LanguageContext } from '../Layout';

function CV() {
  const { lang } = useContext(LanguageContext);
  const [tab, setTab] = useState('experience');

  // Common card style for all tabs
  const cardStyle: React.CSSProperties = {
    maxWidth: 600,
    margin: '0 auto',
    color: '#333',
    fontSize: '1.05em',
    lineHeight: 1.7,
    minHeight: 'auto',
    maxHeight: 'none',
    transition: undefined,
    display: 'block',
    textAlign: 'left',
    overflow: 'visible',
  };

  return (
    <section className="cv-section" style={{maxWidth: 800, margin: '3em auto 2em auto', background: '#f4f6f3', borderRadius: '1.2em', boxShadow: '0 2px 12px 0 #b7c8b544', padding: 0, overflow: 'hidden', minHeight: '60vh', position: 'relative'}}>
      <div style={{padding: '2.5em 2em 0 2em'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: 600, margin: '0 auto 2.2em auto'}}>
          <h1 style={{color: 'var(--accent-green)', fontWeight: 700, fontSize: '2em', margin: 0}}>
            {lang === 'no' ? 'CV' : 'CV'}
          </h1>
        </div>
        <nav style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2em',
          background: '#e6ede7',
          borderRadius: '1.2em',
          border: '1.5px solid #b7c8b5',
          margin: '0 auto 1.5em auto',
          maxWidth: 600,
          position: 'relative',
          top: 0,
          zIndex: 10,
          boxShadow: '0 1px 8px #b7c8b522',
          padding: '1.1em 0 1em 0',
        }}>
          <button className={tab === 'experience' ? 'icon-btn active' : 'icon-btn'} onClick={() => setTab('experience')}>{lang === 'no' ? 'Erfaring' : 'Experience'}</button>
          <button className={tab === 'education' ? 'icon-btn active' : 'icon-btn'} onClick={() => setTab('education')}>{lang === 'no' ? 'Utdanning' : 'Education'}</button>
          <button className={tab === 'positions' ? 'icon-btn active' : 'icon-btn'} onClick={() => setTab('positions')}>{lang === 'no' ? 'Verv' : 'Positions'}</button>
          <button className={tab === 'skills' ? 'icon-btn active' : 'icon-btn'} onClick={() => setTab('skills')}>{lang === 'no' ? 'Ferdigheter/Verktøy' : 'Skills/Tools'}</button>
        </nav>
  <div style={{marginTop: 0}}>
  </div>
        {tab === 'education' && (
          <div style={cardStyle}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, gap: 16}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <h2 style={{color: 'var(--accent-green)', margin: 0, fontWeight: 600, fontSize: '1.35em', borderBottom: '1.5px solid #e6ede7', paddingBottom: 6, marginBottom: 0}}>{lang === 'no' ? 'Utdanning' : 'Education'}</h2>
                <span style={{fontSize: '1.5em', color: 'var(--accent-green)'}} aria-label="education" title="Education">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" style={{verticalAlign: 'middle'}}><path d="M12 3L2 8.5L12 14L22 8.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M4 10.5V15.5C4 16.3284 7.13401 17 12 17C16.866 17 20 16.3284 20 15.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                </span>
              </div>
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
            </div>
            <ul style={{margin: 0, padding: 0, listStyle: 'none', textAlign: 'left', width: '100%'}}>
              {lang === 'no' ? (
                <>
                  <li style={{marginBottom: 18}}>
                    <span style={{background: 'rgba(233, 214, 245, 1)ff', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block'}}>2022 - 2024</span>
                    <div style={{margin: '8px 0 0 0', fontWeight: 700, fontSize: '1.08em'}}>Bachelor, informatikk, design bruk og interaksjon</div>
                    <div style={{fontSize: '1em', color: '#222', marginBottom: 2}}>Universitetet i Oslo</div>
                    <hr style={{border: 0, borderTop: '1.5px solid #e6ede7', margin: '14px 0 0 0'}}/>
                  </li>
                  <li style={{marginBottom: 18}}>
                    <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block'}}>2020 - 2022</span>
                    <div style={{margin: '8px 0 0 0', fontWeight: 700, fontSize: '1.08em'}}>Bachelor i psykologi</div>
                    <div style={{fontSize: '1em', color: '#222', marginBottom: 2}}>Norges teknisk-naturvitenskapelige universitet</div>
                    <hr style={{border: 0, borderTop: '1.5px solid #e6ede7', margin: '14px 0 0 0'}}/>
                  </li>
                  <li>
                    <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block'}}>2019 - 2020</span>
                    <div style={{margin: '8px 0 0 0', fontWeight: 700, fontSize: '1.08em'}}>Årsstudie i spansk, historie og filosofi</div>
                    <div style={{fontSize: '1em', color: '#222', marginBottom: 2}}>Universidad Internacional San Isidro Labrador<br/>Universidad Nacional de San Martín</div>
                  </li>
                </>
              ) : (
                <>
                  <li style={{marginBottom: 18}}>
                    <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block'}}>2022 - 2024</span>
                    <div style={{margin: '8px 0 0 0', fontWeight: 700, fontSize: '1.08em'}}>Bachelor, Informatics: Design, Use, and Interaction</div>
                    <div style={{fontSize: '1em', color: '#222', marginBottom: 2}}>University of Oslo</div>
                    <hr style={{border: 0, borderTop: '1.5px solid #e6ede7', margin: '14px 0 0 0'}}/>
                  </li>
                  <li style={{marginBottom: 18}}>
                    <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block'}}>2020 - 2022</span>
                    <div style={{margin: '8px 0 0 0', fontWeight: 700, fontSize: '1.08em'}}>Bachelor in Psychology</div>
                    <div style={{fontSize: '1em', color: '#222', marginBottom: 2}}>Norwegian University of Science and Technology</div>
                    <hr style={{border: 0, borderTop: '1.5px solid #e6ede7', margin: '14px 0 0 0'}}/>
                  </li>
                  <li>
                    <span style={{background: '#00ff00ff', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block'}}>2019 - 2020</span>
                    <div style={{margin: '8px 0 0 0', fontWeight: 700, fontSize: '1.08em'}}>One-year study in Spanish, History and Philosophy</div>
                    <div style={{fontSize: '1em', color: '#222', marginBottom: 2}}>Universidad Internacional San Isidro Labrador<br/>Universidad Nacional de San Martín</div>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
        {tab === 'experience' && (
          <div style={cardStyle}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 18}}>
              <h2 style={{color: 'var(--accent-green)', marginTop: 0, fontWeight: 600, fontSize: '1.35em', borderBottom: '1.5px solid #e6ede7', paddingBottom: 6, marginBottom: 0}}>
                {lang === 'no' ? 'Relevant erfaring' : 'Relevant Experience'}
              </h2>
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
            </div>
            {lang === 'no' ? (
              <>
                {/* UX Designer & Scrum Master */}
                <div style={{marginBottom: 22}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 2}}>
                    <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block'}}>Juli 2024 - nå</span>
                    <span style={{fontWeight: 700, fontSize: '1.08em', marginLeft: 0}}>UX Designer & Scrum Master</span>
                    <span style={{fontSize: '1em', color: '#222', fontWeight: 400, marginLeft: 8}}>Aibel AS</span>
                  </div>
                  <div style={{fontSize: '1em', color: '#222', margin: '6px 0 0 0', lineHeight: 1.6}}>
                    Jobber hovedsakelig som UX designer hvor jeg leder designprosessen fra start til slutt. Som UX designer gjør jeg alt fra innsikt, analyse, prototyping, tester og vedlikeholder designsystemet vi bruker.<br/><br/>
                    I tillegg er jeg scrum master for teamene jeg er UX designer i, som vil si at jeg fasiliterer møter som retro, standup og sprintplanning. I tillegg gjør jeg prioriteringer og har nært samarbeid med produkteierne.
                  </div>
                  <hr style={{border: 0, borderTop: '1.5px solid #e6ede7', margin: '18px 0 0 0'}}/>
                </div>
                {/* IT support technician */}
                <div style={{marginBottom: 22}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 2}}>
                    <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block'}}>juli 2023 - mai 2024</span>
                    <span style={{fontWeight: 700, fontSize: '1.08em', marginLeft: 0}}>IT support technician</span>
                    <span style={{fontSize: '1em', color: '#222', fontWeight: 400, marginLeft: 8}}>Advania</span>
                  </div>
                  <div style={{fontSize: '1em', color: '#222', margin: '6px 0 0 0', lineHeight: 1.6}}>
                    Jobbet med å hjelpe brukere som ringte inn med ulike tekniske problemer.
                  </div>
                  <hr style={{border: 0, borderTop: '1.5px solid #e6ede7', margin: '18px 0 0 0'}}/>
                </div>
                {/* Annen erfaring */}
                <h2 style={{color: 'var(--accent-green)', fontSize: '1.1em', marginTop: 32, borderBottom: '1.5px solid #e6ede7', paddingBottom: 4, marginBottom: 18}}>Annen erfaring</h2>
                {/* Kantinemedarbeider */}
                <div style={{marginBottom: 24}}>
                  <div style={{fontWeight: 700, fontSize: '1.08em', marginBottom: 4}}>Kantinemedarbeider</div>
                  <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block', marginBottom: 4}}>september 2021 - juni 2022</span>
                  <div style={{fontSize: '1em', color: '#222', marginTop: 4}}>Sit-Kafé</div>
                  <hr style={{border: 0, borderTop: '1.5px solid #e6ede7', margin: '16px 0 0 0'}}/>
                </div>
                {/* Pleiemedarbeider */}
                <div style={{marginBottom: 24}}>
                  <div style={{fontWeight: 700, fontSize: '1.08em', marginBottom: 4}}>Pleiemedarbeider</div>
                  <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block', marginBottom: 4}}>september 2021 - juni 2022</span>
                  <div style={{fontSize: '1em', color: '#222', marginTop: 4}}>Nordre Follo Kommune</div>
                  <hr style={{border: 0, borderTop: '1.5px solid #e6ede7', margin: '16px 0 0 0'}}/>
                </div>
                {/* Barnehagevikar */}
                <div>
                  <div style={{fontWeight: 700, fontSize: '1.08em', marginBottom: 4}}>Barnehagevikar</div>
                  <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block', marginBottom: 4}}>juni 2021 - juli 2022 & juni 2018 - juli 2018</span>
                  <div style={{fontSize: '1em', color: '#222', marginTop: 4}}>Nordre Follo Kommune</div>
                </div>
              </>
            ) : (
              <>
                {/* UX Designer & Scrum Master */}
                <div style={{marginBottom: 22}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 2}}>
                    <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block'}}>July 2024 - present</span>
                    <span style={{fontWeight: 700, fontSize: '1.08em', marginLeft: 0}}>UX Designer & Scrum Master</span>
                    <span style={{fontSize: '1em', color: '#222', fontWeight: 400, marginLeft: 8}}>Aibel AS</span>
                  </div>
                  <div style={{fontSize: '1em', color: '#222', margin: '6px 0 0 0', lineHeight: 1.6}}>
                    Mainly working as a UX designer, leading the design process from start to finish. As a UX designer, I do everything from research, analysis, prototyping, testing, and maintaining our design system.<br/><br/>
                    In addition, I am the scrum master for the teams I am a UX designer in, which means I facilitate meetings such as retrospectives, standups, and sprint planning. I also do prioritization and work closely with the product owners.
                  </div>
                  <hr style={{border: 0, borderTop: '1.5px solid #e6ede7', margin: '18px 0 0 0'}}/>
                </div>
                {/* IT support technician */}
                <div style={{marginBottom: 22}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 2}}>
                    <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block'}}>July 2023 - May 2024</span>
                    <span style={{fontWeight: 700, fontSize: '1.08em', marginLeft: 0}}>IT support technician</span>
                    <span style={{fontSize: '1em', color: '#222', fontWeight: 400, marginLeft: 8}}>Advania</span>
                  </div>
                  <div style={{fontSize: '1em', color: '#222', margin: '6px 0 0 0', lineHeight: 1.6}}>
                    Helped users who called in with various technical issues.
                  </div>
                  <hr style={{border: 0, borderTop: '1.5px solid #e6ede7', margin: '18px 0 0 0'}}/>
                </div>
                {/* Other experience */}
                <h2 style={{color: 'var(--accent-green)', fontSize: '1.1em', marginTop: 32, borderBottom: '1.5px solid #e6ede7', paddingBottom: 4, marginBottom: 18}}>Other experience</h2>
                {/* Cafeteria worker */}
                <div style={{marginBottom: 18}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 2}}>
                    <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block'}}>September 2021 - June 2022</span>
                    <span style={{fontWeight: 700, fontSize: '1.08em', marginLeft: 0}}>Cafeteria worker</span>
                    <span style={{fontSize: '1em', color: '#222', fontWeight: 400, marginLeft: 8}}>Sit-Kafé</span>
                  </div>
                </div>
                {/* Care assistant */}
                <div style={{marginBottom: 18}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 2}}>
                    <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block'}}>September 2021 - June 2022</span>
                    <span style={{fontWeight: 700, fontSize: '1.08em', marginLeft: 0}}>Care assistant</span>
                    <span style={{fontSize: '1em', color: '#222', fontWeight: 400, marginLeft: 8}}>Nordre Follo Municipality</span>
                  </div>
                </div>
                {/* Kindergarten substitute */}
                <div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 2}}>
                    <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block'}}>June 2021 - July 2022 & June 2018 - July 2018</span>
                    <span style={{fontWeight: 700, fontSize: '1.08em', marginLeft: 0}}>Kindergarten substitute</span>
                    <span style={{fontSize: '1em', color: '#222', fontWeight: 400, marginLeft: 8}}>Nordre Follo Municipality</span>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {tab === 'positions' && (
          <div style={cardStyle}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, gap: 16}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <h2 style={{color: 'var(--accent-green)', margin: 0, fontWeight: 600, fontSize: '1.35em', borderBottom: '1.5px solid #e6ede7', paddingBottom: 6, marginBottom: 0}}>{lang === 'no' ? 'Verv' : 'Positions'}</h2>
                <span style={{fontSize: '1.5em', color: 'var(--accent-green)'}} aria-label="positions" title="Positions">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" style={{verticalAlign: 'middle'}}><path d="M12 21s-7-4.35-7-10A5 5 0 0 1 12 6a5 5 0 0 1 7 5c0 5.65-7 10-7 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                </span>
              </div>
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
            </div>
            <ul style={{margin: 0, padding: 0, listStyle: 'none', textAlign: 'left', width: '100%'}}>
              {lang === 'no' ? (
                <>
                  <li style={{marginBottom: 18}}>
                    <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block'}}>sep. 2022 - mai 2024</span>
                    <div style={{margin: '8px 0 0 0', fontWeight: 700, fontSize: '1.08em', display: 'inline'}}>
                      Intern & Promoteringsansvarlig
                    </div>
                    <span style={{fontSize: '1em', color: '#222', fontWeight: 400, marginLeft: 6}}>
                      | Defi (Linjeforeningen for design)
                    </span>
                    <hr style={{border: 0, borderTop: '1.5px solid #e6ede7', margin: '14px 0 0 0'}}/>
                  </li>
                  <li>
                    <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block'}}>sep. 2021 - sep. 2023</span>
                    <div style={{margin: '8px 0 0 0', fontWeight: 700, fontSize: '1.08em', display: 'inline'}}>
                      Promoteringsansvarlig
                    </div>
                    <span style={{fontSize: '1em', color: '#222', fontWeight: 400, marginLeft: 6}}>
                      | Bedriftsportalen for psykologi
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li style={{marginBottom: 18}}>
                    <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block'}}>Sep. 2022 - May 2024</span>
                    <div style={{margin: '8px 0 0 0', fontWeight: 700, fontSize: '1.08em', display: 'inline'}}>
                      Internal & Promotion Manager
                    </div>
                    <span style={{fontSize: '1em', color: '#222', fontWeight: 400, marginLeft: 6}}>
                      | Defi (Student association for design)
                    </span>
                    <hr style={{border: 0, borderTop: '1.5px solid #e6ede7', margin: '14px 0 0 0'}}/>
                  </li>
                  <li>
                    <span style={{background: '#d6f5d6', borderRadius: 6, padding: '0.2em 0.9em', fontSize: '1em', color: '#355c47', fontWeight: 500, display: 'inline-block'}}>Sep. 2021 - Sep. 2023</span>
                    <div style={{margin: '8px 0 0 0', fontWeight: 700, fontSize: '1.08em', display: 'inline'}}>
                      Promotion Manager
                    </div>
                    <span style={{fontSize: '1em', color: '#222', fontWeight: 400, marginLeft: 6}}>
                      | Business Portal for Psychology
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
        {tab === 'skills' && (
          <div style={cardStyle}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, gap: 16}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <h2 style={{color: 'var(--accent-green)', margin: 0, fontWeight: 600, fontSize: '1.35em', borderBottom: '1.5px solid #e6ede7', paddingBottom: 6, marginBottom: 0}}>{lang === 'no' ? 'Ferdigheter/Verktøy' : 'Skills/Tools'}</h2>
                <span style={{fontSize: '1.5em', color: 'var(--accent-green)'}} aria-label="tools" title="Tools">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" style={{verticalAlign: 'middle'}}><path d="M21 21L16.65 16.65M19.5 10.5A7 7 0 0 1 10.5 19.5C7.46243 19.5 4.5 16.5376 4.5 13.5C4.5 12.1193 5.11929 10.8304 6.17157 9.87868C7.22386 8.92695 8.61242 8.5 10.05 8.5C11.4876 8.5 12.8761 8.92695 13.9284 9.87868C14.9807 10.8304 15.6 12.1193 15.6 13.5C15.6 16.5376 12.6376 19.5 9.6 19.5C6.56243 19.5 3.6 16.5376 3.6 13.5C3.6 10.4624 6.56243 7.5 9.6 7.5C12.6376 7.5 15.6 10.4624 15.6 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                </span>
              </div>
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
            </div>
            <hr style={{border: 0, borderTop: '1.5px solid #b7c8b5', margin: '0 0 16px 0'}}/>
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
          </div>
        )}
  {/* Removed Download CV button from bottom of page */}
      </div>
    </section>
  );
}

export default CV;
