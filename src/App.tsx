import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            Welcome to my portfolio! I am a passionate developer with a love for
            creating beautiful and functional web applications.
          </p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-list">
            <div className="project-item">
              <h3>Project 1</h3>
              <p>A brief description of Project 1.</p>
            </div>
            <div className="project-item">
              <h3>Project 2</h3>
              <p>A brief description of Project 2.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>
            Feel free to reach out to me at{' '}
            <a href="mailto:example@example.com">example@example.com</a>.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
