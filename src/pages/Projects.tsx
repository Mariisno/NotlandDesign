import { useState, useContext } from 'react';
import { LanguageContext } from '../Layout';
import { apps, type AppStatus } from '../data/apps';

const STATUS_LABELS: Record<AppStatus, [string, string]> = {
  'in-development': ['In Development', 'Under utvikling'],
  'beta': ['Beta', 'Beta'],
  'live': ['Live', 'Live'],
  'coming-soon': ['Coming Soon', 'Kommer snart'],
};

function formatDate(dateStr: string, lang: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === 'no' ? 'nb-NO' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function Projects() {
  const { lang } = useContext(LanguageContext);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="section apps-section">
      <h2>{lang === 'no' ? 'Prosjekter' : 'Projects'}</h2>
      <p className="apps-intro">
        {lang === 'no'
          ? 'Her er appene jeg jobber med. Klikk på et kort for å se mer.'
          : 'Here are the apps I\'m working on. Click a card to see more.'}
      </p>
      <div className="project-list">
        {apps.map(app => {
          const isExpanded = expanded === app.id;
          const latestUpdate = app.updates[0];
          const [statusEn, statusNo] = STATUS_LABELS[app.status];

          return (
            <div
              key={app.id}
              className={`project-item app-card${isExpanded ? ' app-card--expanded' : ''}`}
              onClick={() => setExpanded(isExpanded ? null : app.id)}
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              onKeyDown={e => e.key === 'Enter' && setExpanded(isExpanded ? null : app.id)}
            >
              <div className="app-card-header">
                <h3 className="app-name">{app.name}</h3>
                <span className={`status-badge status-badge--${app.status}`}>
                  {lang === 'no' ? statusNo : statusEn}
                </span>
              </div>

              <p className="app-tagline">
                {lang === 'no' ? app.taglineNo : app.tagline}
              </p>

              {latestUpdate && (
                <p className="app-last-updated">
                  {lang === 'no' ? 'Sist oppdatert' : 'Last updated'}:{' '}
                  <span>{formatDate(latestUpdate.date, lang)}</span>
                </p>
              )}

              {isExpanded && (
                <div className="app-card-details">
                  <p className="app-description">
                    {lang === 'no' ? app.descriptionNo : app.description}
                  </p>

                  {app.tech.length > 0 && (
                    <div className="app-tech">
                      {app.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                  )}

                  {app.updates.length > 0 && (
                    <div className="app-updates">
                      <h4>{lang === 'no' ? 'Siste oppdateringer' : 'Recent updates'}</h4>
                      <ul className="updates-list">
                        {app.updates.slice(0, 5).map((u, i) => (
                          <li key={i} className="update-item">
                            <span className="update-date">{formatDate(u.date, lang)}</span>
                            <span className="update-msg">{u.message}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              <span className="app-expand-hint" aria-hidden="true">
                {isExpanded ? '▲' : '▼'}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
