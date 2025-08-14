import './App.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { LanguageContext } from './Layout';

function App() {
  const { lang } = useContext(LanguageContext);
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">{lang === 'no' ? 'Hei, jeg er Mari Svennevik Notland!' : 'Hi, I’m Mari Svennevik Notland!'}</h2>
        <h3 className="hero-subtitle">{lang === 'no' ? 'UX-designer & kreativ problemløser' : 'UX Designer & Creative Problem Solver'}</h3>
        <p className="hero-desc">
          {lang === 'no'
            ? 'Jeg designer brukervennlige, intuitive og morsomme digitale opplevelser.\nLa oss gjøre nettet til et gladere sted – én piksel om gangen!'
            : 'I design delightful, intuitive, and fun digital experiences.\nLet’s make the web a happier place—one pixel at a time!'}
        </p>
        <Link className="hero-cta" to="/contact">{lang === 'no' ? 'Ta kontakt' : 'Let’s Connect'}</Link>
      </div>
    </section>
  );
}

export default App
