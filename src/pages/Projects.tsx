import { useContext } from 'react';
import { LanguageContext } from '../Layout';

function Projects() {
  const { lang } = useContext(LanguageContext);
  return (
    <section className="section">
      <h2>{lang === 'no' ? 'Prosjekter' : 'Projects'}</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>{lang === 'no' ? 'Color Quest' : 'Color Quest'}</h3>
          <p>{lang === 'no' ? 'Et spillifisert fargeverktøy som gjør det gøy å velge paletter.' : 'A gamified color palette tool that turns picking colors into an adventure.'}</p>
        </div>
        <div className="project-item">
          <h3>{lang === 'no' ? 'HappyPath' : 'HappyPath'}</h3>
          <p>{lang === 'no' ? 'UX casestudie: Redesign av en reiseapp for å gjøre planleggingen enkel og morsom.' : 'UX case study: Redesigning a travel app to make trip planning joyful and stress-free.'}</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
