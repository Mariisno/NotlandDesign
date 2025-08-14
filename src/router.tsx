import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

import App from './App';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CV from './pages/CV';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cv" element={<CV />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
