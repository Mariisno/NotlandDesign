import { useContext } from 'react';
import { LanguageContext } from '../Layout';

function Contact() {
  const { lang } = useContext(LanguageContext);
  return (
    <section className="section">
      <h2>{lang === 'no' ? 'Kontakt' : 'Contact'}</h2>
      <p>
        {lang === 'no'
          ? 'Vil du samarbeide eller bare si hei?'
          : 'Want to collaborate or just say hi?'}<br />
  <a href="mailto:marinosve@gmail.com">marinosve@gmail.com</a>
      </p>
    </section>
  );
}

export default Contact;
