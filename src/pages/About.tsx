import { useContext } from 'react';
import { LanguageContext } from '../Layout';

function About() {
  const { lang } = useContext(LanguageContext);
  return (
    <section className="section">
      <h2>{lang === 'no' ? 'Om meg' : 'About Me'}</h2>
      <p>
        {lang === 'no'
          ? 'Jeg er en UX-designer med lidenskap for lekne grensesnitt, brukerempati og kreativ historiefortelling. Min tilnærming kombinerer forskning, design thinking og en dose moro for å lage opplevelser folk elsker å bruke. Enten det er wireframes, prototyper eller pikselperfekt UI, bringer jeg ideer til live med et smil.'
          : 'I’m a UX designer with a passion for playful interfaces, user empathy, and creative storytelling. My approach blends research, design thinking, and a sprinkle of fun to craft experiences that people love to use. Whether it’s wireframes, prototypes, or pixel-perfect UI, I bring ideas to life with a smile.'}
      </p>
    </section>
  );
}

export default About;
