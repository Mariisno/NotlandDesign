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
          <h1 className="logo-title">NotlandDesign</h1>
          <nav className="main-nav">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Me</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
            <NavLink to="/cv" className={({ isActive }) => isActive ? 'active' : ''}>CV</NavLink>
          </nav>
          <div className="lang-switcher">
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
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2025 NotlandDesign. Designed by Mari Svennevik Notland with fun and care.</p>
      </footer>
    </LanguageContext.Provider>
  );
}

export default Layout;
