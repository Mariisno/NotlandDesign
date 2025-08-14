import { useContext, useState } from 'react';
import { LanguageContext } from '../Layout';
import { ExperienceItem, SectionHeader } from '../components/CVParts';
import { CVCard, PDFDownloadButton, CVTabNav, SkillList } from '../components/CVExtraParts';
import { ExperienceList, SectionDivider, CVSection, LangSwitch } from '../components/CVUtils';

function CV() {
  const { lang, setLang } = useContext(LanguageContext);
  const [tab, setTab] = useState('experience');

  // cardStyle replaced by CVCard component

  return (
    <section className="cv-section" style={{maxWidth: 800, margin: '3em auto 2em auto', background: '#f4f6f3', borderRadius: '1.2em', boxShadow: '0 2px 12px 0 #b7c8b544', padding: 0, overflow: 'hidden', minHeight: '60vh', position: 'relative'}}>
      <div style={{padding: '2.5em 2em 0 2em'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: 600, margin: '0 auto 2.2em auto'}}>
          <h1 style={{color: 'var(--accent-green)', fontWeight: 700, fontSize: '2em', margin: 0}}>
            {lang === 'no' ? 'CV' : 'CV'}
          </h1>
        </div>
        <CVTabNav tab={tab} setTab={setTab} lang={lang} />
        {tab === 'education' && (
          <CVCard>
            <CVSection
              header={lang === 'no' ? 'Utdanning' : 'Education'}
              right={<PDFDownloadButton lang={lang} />}
              style={{marginBottom: 0}}
            >
              <ExperienceList
                items={lang === 'no' ? [
                  { date: '2022 - 2024', title: 'Bachelor, informatikk, design bruk og interaksjon', children: <div style={{fontSize: '1em', color: '#222', marginBottom: 2}}>Universitetet i Oslo</div> },
                  { date: '2020 - 2022', title: 'Bachelor i psykologi', children: <div style={{fontSize: '1em', color: '#222', marginBottom: 2}}>Norges teknisk-naturvitenskapelige universitet</div> },
                  { date: '2019 - 2020', title: 'Årsstudie i spansk, historie og filosofi', children: <div style={{fontSize: '1em', color: '#222', marginBottom: 2}}>Universidad Internacional San Isidro Labrador<br/>Universidad Nacional de San Martín</div> },
                ] : [
                  { date: '2022 - 2024', title: 'Bachelor, Informatics: Design, Use, and Interaction', children: <div style={{fontSize: '1em', color: '#222', marginBottom: 2}}>University of Oslo</div> },
                  { date: '2020 - 2022', title: 'Bachelor in Psychology', children: <div style={{fontSize: '1em', color: '#222', marginBottom: 2}}>Norwegian University of Science and Technology</div> },
                  { date: '2019 - 2020', title: 'One-year study in Spanish, History and Philosophy', children: <div style={{fontSize: '1em', color: '#222', marginBottom: 2}}>Universidad Internacional San Isidro Labrador<br/>Universidad Nacional de San Martín</div> },
                ]}
              />
            </CVSection>
          </CVCard>
        )}
        {tab === 'experience' && (
          <CVCard>
            <CVSection header={lang === 'no' ? 'Relevant erfaring' : 'Relevant Experience'} right={<PDFDownloadButton lang={lang} />}>
              <ExperienceList
                items={lang === 'no' ? [
                  {
                    date: 'Juli 2024 - nå',
                    title: 'UX Designer & Scrum Master',
                    org: 'Aibel AS',
                    children: <>
                      Jobber hovedsakelig som UX designer hvor jeg leder designprosessen fra start til slutt. Som UX designer gjør jeg alt fra innsikt, analyse, prototyping, tester og vedlikeholder designsystemet vi bruker.<br /><br />
                      I tillegg er jeg scrum master for teamene jeg er UX designer i, som vil si at jeg fasiliterer møter som retro, standup og sprintplanning. I tillegg gjør jeg prioriteringer og har nært samarbeid med produkteierne.
                    </>
                  },
                  {
                    date: 'juli 2023 - mai 2024',
                    title: 'IT support technician',
                    org: 'Advania',
                    children: <>Jobbet med å hjelpe brukere som ringte inn med ulike tekniske problemer.</>
                  },
                ] : [
                  {
                    date: 'July 2024 - present',
                    title: 'UX Designer & Scrum Master',
                    org: 'Aibel AS',
                    children: <>
                      Mainly working as a UX designer, leading the design process from start to finish. As a UX designer, I do everything from research, analysis, prototyping, testing, and maintaining our design system.<br /><br />
                      In addition, I am the scrum master for the teams I am a UX designer in, which means I facilitate meetings such as retrospectives, standups, and sprint planning. I also do prioritization and work closely with the product owners.
                    </>
                  },
                  {
                    date: 'July 2023 - May 2024',
                    title: 'IT support technician',
                    org: 'Advania',
                    children: <>Helped users who called in with various technical issues.</>
                  },
                ]}
              />
              <SectionHeader style={{ fontSize: '1.1em', marginTop: 32, borderBottom: '1.5px solid #e6ede7', paddingBottom: 4, marginBottom: 18 }}>
                {lang === 'no' ? 'Annen erfaring' : 'Other experience'}
              </SectionHeader>
              <ExperienceList
                items={lang === 'no' ? [
                  { date: 'september 2021 - juni 2022', title: 'Kantinemedarbeider', org: 'Sit-Kafé' },
                  { date: 'september 2021 - juni 2022', title: 'Pleiemedarbeider', org: 'Nordre Follo Kommune' },
                  { date: 'juni 2021 - juli 2022 & juni 2018 - juli 2018', title: 'Barnehagevikar', org: 'Nordre Follo Kommune' },
                ] : [
                  { date: 'September 2021 - June 2022', title: 'Cafeteria worker', org: 'Sit-Kafé' },
                  { date: 'September 2021 - June 2022', title: 'Care assistant', org: 'Nordre Follo Municipality' },
                  { date: 'June 2021 - July 2022 & June 2018 - July 2018', title: 'Kindergarten substitute', org: 'Nordre Follo Municipality' },
                ]}
              />
            </CVSection>
          </CVCard>
        )}
        {tab === 'positions' && (
          <CVCard>
            <CVSection header={lang === 'no' ? 'Verv' : 'Positions'}>
              <ExperienceList
                items={lang === 'no' ? [
                  { date: 'sep. 2022 - mai 2024', title: 'Intern & Promoteringsansvarlig', org: 'Defi (Linjeforeningen for design)' },
                  { date: 'sep. 2021 - sep. 2023', title: 'Promoteringsansvarlig', org: 'Bedriftsportalen for psykologi' },
                ] : [
                  { date: 'Sep. 2022 - May 2024', title: 'Internal & Promotion Manager', org: 'Defi (Student association for design)' },
                  { date: 'Sep. 2021 - Sep. 2023', title: 'Promotion Manager', org: 'Business Portal for Psychology' },
                ]}
              />
            </CVSection>
          </CVCard>
        )}
        {tab === 'skills' && (
          <CVCard>
            <CVSection header={lang === 'no' ? 'Ferdigheter/Verktøy' : 'Skills/Tools'}>
              <SkillList lang={lang} />
            </CVSection>
          </CVCard>
        )}
  {/* Removed Download CV button from bottom of page */}
      </div>
    </section>
  );
}

export default CV;
