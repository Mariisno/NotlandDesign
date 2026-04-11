import updatesData from './updates.json';

export type AppStatus = 'in-development' | 'beta' | 'live' | 'coming-soon';

export interface AppUpdate {
  date: string;
  message: string;
}

export interface App {
  id: string;
  name: string;
  tagline: string;
  taglineNo: string;
  description: string;
  descriptionNo: string;
  status: AppStatus;
  tech: string[];
  url?: string;
  updates: AppUpdate[];
}

const updates = updatesData as Record<string, AppUpdate[]>;

export const apps: App[] = [
  {
    id: 'notlanddesign',
    name: 'NotlandDesign',
    tagline: 'This site — my portfolio and public presence.',
    taglineNo: 'Denne siden — min portefølje og offentlige tilstedeværelse.',
    description:
      'My personal portfolio and CV site. Built with React, TypeScript, and Vite. Bilingual (Norwegian/English), mobile-friendly, and continuously updated as I grow and take on new work.',
    descriptionNo:
      'Min personlige portefølje og CV-side. Bygget med React, TypeScript og Vite. Tospråklig (norsk/engelsk), mobilklar, og kontinuerlig oppdatert etter hvert som jeg vokser og tar på meg nytt arbeid.',
    status: 'live',
    tech: ['React', 'TypeScript', 'Vite'],
    updates: updates['notlanddesign'] ?? [],
  },
  {
    id: 'grow',
    name: 'grow',
    tagline: 'A personal tracker for habits, goals, and reflection.',
    taglineNo: 'En personlig tracker for vaner, mål og refleksjon.',
    description:
      'A private personal productivity app I built for myself — tracking habits, weekly reviews, and personal goals. Progressive Web App with dark mode, persistent login, and offline support.',
    descriptionNo:
      'En privat personlig produktivitetsapp jeg bygget for meg selv — sporing av vaner, ukentlige refleksjoner og personlige mål. Progressiv nettapp med mørk modus, vedvarende innlogging og støtte uten nett.',
    status: 'in-development',
    tech: ['React', 'TypeScript', 'Supabase', 'PWA'],
    updates: updates['grow'] ?? [],
  },
  {
    id: 'knito',
    name: 'Knito',
    tagline: 'A knitting companion to track projects, patterns, and yarn.',
    taglineNo: 'En strikkekompis for å følge prosjekter, mønstre og garn.',
    description:
      'Knito helps knitters keep track of their ongoing projects, saved patterns, and yarn stash — all in one place. Built with knitting enthusiasts in mind, from beginners to seasoned crafters.',
    descriptionNo:
      'Knito hjelper strikkere med å holde styr på pågående prosjekter, lagrede mønstre og garnlager – alt på ett sted. Laget med strikkere i tankene, fra nybegynnere til erfarne håndverkere.',
    status: 'in-development',
    tech: ['React', 'TypeScript', 'Figma Make'],
    updates: updates['knito'] ?? [],
  },
  {
    id: 'idabook',
    name: 'Idabook',
    tagline: 'Capture ideas, inspiration, and creative sparks.',
    taglineNo: 'Fang ideer, inspirasjon og kreative gnister.',
    description:
      'Idabook is an idea and inspiration notebook app for collecting thoughts, sketches, links, and references. Designed to make capturing and revisiting ideas feel effortless and enjoyable.',
    descriptionNo:
      'Idabook er en idé- og inspirasjonsnotatbok for å samle tanker, skisser, lenker og referanser. Designet for å gjøre det enkelt og gøy å fange og gjenbesøke ideer.',
    status: 'in-development',
    tech: ['React', 'TypeScript', 'Figma Make'],
    updates: updates['idabook'] ?? [],
  },
];
