import React from 'react';

// Date badge for year ranges
export function DateBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="date-badge">{children}</span>
  );
}

// Section header with optional icon and right-aligned content (e.g. download button)
export function SectionHeader({
  children,
  icon,
  right,
  style
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  right?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, gap: 16, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <h2 style={{ color: 'var(--accent-green)', margin: 0, fontWeight: 600, fontSize: '1.35em', borderBottom: '1.5px solid #e6ede7', paddingBottom: 6, marginBottom: 0 }}>{children}</h2>
        {icon && <span style={{ fontSize: '1.5em', color: 'var(--accent-green)' }}>{icon}</span>}
      </div>
      {right}
    </div>
  );
}

// Experience/other item block
export function ExperienceItem({
  date,
  title,
  org,
  children,
  style
}: {
  date: React.ReactNode;
  title: React.ReactNode;
  org?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ marginBottom: 24, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 2 }}>
        <DateBadge>{date}</DateBadge>
        <span style={{ fontWeight: 700, fontSize: '1.08em', marginLeft: 0 }}>{title}</span>
        {org && <span style={{ fontSize: '1em', color: '#222', fontWeight: 400, marginLeft: 8 }}>{org}</span>}
      </div>
      {children && <div style={{ fontSize: '1em', color: '#222', margin: '6px 0 0 0', lineHeight: 1.6 }}>{children}</div>}
    </div>
  );
}
