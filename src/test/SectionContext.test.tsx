import { describe, it, expect } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { SectionProvider, useSection } from '../contexts/SectionContext';

function SectionDisplay() {
  const { currentSection } = useSection();
  return <div data-testid="section">{currentSection ?? 'null'}</div>;
}

function SectionSetter({ value }: { value: string | null }) {
  const { setCurrentSection } = useSection();
  return <button onClick={() => setCurrentSection(value)}>set</button>;
}

describe('SectionContext', () => {
  it('defaults currentSection to null', () => {
    render(
      <SectionProvider>
        <SectionDisplay />
      </SectionProvider>
    );
    expect(screen.getByTestId('section')).toHaveTextContent('null');
  });

  it('setCurrentSection updates the value', () => {
    render(
      <SectionProvider>
        <SectionDisplay />
        <SectionSetter value="about" />
      </SectionProvider>
    );
    act(() => {
      screen.getByRole('button').click();
    });
    expect(screen.getByTestId('section')).toHaveTextContent('about');
  });

  it('setCurrentSection can reset to null', () => {
    render(
      <SectionProvider>
        <SectionDisplay />
        <SectionSetter value="contact" />
      </SectionProvider>
    );
    act(() => {
      screen.getByRole('button').click();
    });
    expect(screen.getByTestId('section')).toHaveTextContent('contact');

    render(
      <SectionProvider>
        <SectionDisplay />
        <SectionSetter value={null} />
      </SectionProvider>
    );
    act(() => {
      screen.getAllByRole('button')[1].click();
    });
    expect(screen.getAllByTestId('section')[1]).toHaveTextContent('null');
  });

  it('useSection throws when used outside SectionProvider', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<SectionDisplay />)).toThrow(
      'useSection must be used within a SectionProvider'
    );
    spy.mockRestore();
  });
});
