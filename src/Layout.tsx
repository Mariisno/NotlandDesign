import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import { useState, createContext } from 'react';

export const LanguageContext = createContext({
  lang: 'en',
  setLang: (l: string) => {},
});

const flagStyle = {
  width: '1.7em',
  height: '1.1em',
  marginRight: '0.5em',
  verticalAlign: 'middle',
  borderRadius: '2px',
  boxShadow: '0 1px 4px #bbb2',
  display: 'inline-block',
};

function Layout() {
  const [lang, setLang] = useState('en');
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <header className="header header-bar">
        <div className="header-content">
          <h1
            className="logo-title"
            style={{cursor: 'pointer', userSelect: 'none', margin: 0, marginRight: 'auto'}}
            onClick={() => {
              const container = document.getElementById('flower-animation-container');
              if (!container) return;
              for (let i = 0; i < 12; i++) {
                const flower = document.createElement('img');
                flower.src = '/favicon.svg';
                flower.alt = 'flower';
                flower.style.position = 'absolute';
                flower.style.left = Math.random() * 90 + '%';
                flower.style.top = '-40px';
                flower.style.width = '32px';
                flower.style.opacity = '0.85';
                flower.style.pointerEvents = 'none';
                flower.style.transition = 'transform 2.2s cubic-bezier(.4,1.3,.6,1), opacity 0.7s';
                setTimeout(() => {
                  flower.style.transform = `translateY(${window.innerHeight * 0.8 + Math.random()*60}px) rotate(${Math.random()*60-30}deg)`;
                  flower.style.opacity = '0';
                }, 30);
                setTimeout(() => {
                  if (flower.parentNode) flower.parentNode.removeChild(flower);
                }, 2500);
                container.appendChild(flower);
              }
            }}
          >
            NotlandDesign
          </h1>
          <nav className="main-nav">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Me</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
            <NavLink to="/cv" className={({ isActive }) => isActive ? 'active' : ''}>CV</NavLink>
          </nav>
          <div className="lang-switcher" style={{display: 'flex', alignItems: 'center', gap: '0.7em', marginLeft: 'auto'}}>
            <button
              aria-label="Switch to English"
              className={`icon-btn${lang === 'en' ? ' active' : ''}`}
              onClick={() => setLang('en')}
            >
              <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="UK flag" style={flagStyle} /> EN
            </button>
            <button
              aria-label="Bytt til norsk"
              className={`icon-btn${lang === 'no' ? ' active' : ''}`}
              onClick={() => setLang('no')}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" alt="Norsk flagg" style={flagStyle} /> NO
            </button>
          </div>
        </div>
      </header>
      <div id="flower-animation-container" style={{position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 999}}></div>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5em'}}>
          <div style={{display: 'flex', gap: '0.7em', marginBottom: '0.2em'}}>
            <a
              href="https://github.com/Mariisno"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="icon-btn"
              style={{padding: '0.2em 0.5em'}}
            >
              <svg width="1.6em" height="1.6em" viewBox="0 0 24 24" fill="none" style={{verticalAlign: 'middle'}}>
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="#333"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/marinotland/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="icon-btn"
              style={{padding: '0.2em 0.5em'}}
            >
              <svg width="1.6em" height="1.6em" viewBox="0 0 24 24" fill="none" style={{verticalAlign: 'middle'}}>
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" fill="#0077b5"/>
              </svg>
            </a>
          </div>
          <p>&copy; 2025 NotlandDesign. Designed by Mari Svennevik Notland with fun and care.</p>
        </div>
      </footer>
    </LanguageContext.Provider>
  );
}

export default Layout;
