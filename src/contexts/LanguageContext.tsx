import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'no';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string | string[] => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

const translations = {
  en: {
    nav: {
      projects: 'Projects',
      about: 'About',
      experience: 'Experience',
      contact: 'Contact',
      myStory: 'My Story'
    },
    hero: {
      name: 'Mari Svennevik Notland',
      description: 'As a UX designer, I am passionate about creating intuitive and user-friendly experiences. With experience throughout the entire design process - from research and prototyping to user testing and implementation - I combine insights in psychology, technology, and design to solve complex problems.',
      viewProjects: 'View my projects',
      phone: '47709654'
    },
    skills: {
      title: 'Skills & Tools',
      subtitle: 'My interdisciplinary background gives me a unique understanding of design, the development process, and team dynamics.',
      uxDesign: 'UX Design',
      scrumProject: 'Scrum & Project Management',
      development: 'Development',
      skills: {
        figma: 'Figma & Prototyping',
        designSystem: 'Design System',
        userResearch: 'User Research',
        contextualInquiry: 'Contextual Inquiry',
        personas: 'Personas & Journey Mapping',
        usabilityTesting: 'Usability Testing',
        designThinking: 'Design Thinking',
        universalDesign: 'Universal Design',
        thematicAnalysis: 'Thematic Analysis',
        scrumMaster: 'Scrum Master',
        facilitation: 'Facilitation (Daily, Planning, Retro)',
        agile: 'Agile Methodology',
        roadmaps: 'Roadmaps',
        kanban: 'Kanban',
        prioritization: 'Prioritization',
        workshopFacilitation: 'Workshop Facilitation',
        crossFunctional: 'Cross-functional Collaboration',
        python: 'Python, Java, Kotlin',
        webTech: 'HTML, CSS, JavaScript',
        react: 'React & SQL',
        github: 'GitHub',
        tools: 'Android Studio & VS Code'
      }
    },
    experience: {
      title: 'Experience & Education',
      subtitle: 'My background combines design, psychology, and technology.',
      work: {
        aibel: {
          period: 'July 2024 - Present',
          title: 'UX Designer',
          organization: 'Aibel',
          description: 'Design systems, user insights, and product development. Scrum Master January 2025 - September 2025'
        },
        advania: {
          period: 'July 2023 - May 2024',
          title: 'IT Support Technician',
          organization: 'Advania',
          description: 'Technical support and customer service'
        }
      },
      education: {
        uio: {
          period: '2022 - 2024',
          title: 'Bachelor, Informatics, Design Use and Interaction',
          organization: 'University of Oslo'
        },
        ntnu: {
          period: '2020 - 2022',
          title: 'Bachelor in Psychology',
          organization: 'Norwegian University of Science and Technology'
        }
      }
    },
    contact: {
      title: "Let's Collaborate",
      subtitle: 'I am always open to new opportunities and interesting projects. Feel free to reach out if you want to discuss a collaboration or just grab a coffee.',
      email: 'Email',
      phone: 'Phone',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project or idea...',
        submit: 'Send message',
        sending: 'Sending...',
        success: 'Message sent! I will get back to you soon.',
        error: 'Something went wrong. Please try again or email me directly.'
      }
    },
    footer: {
      tagline: 'UX Designer focused on user-friendly and intuitive solutions',
      navigation: 'Navigation',
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      socialContact: 'Contact',
      copyright: 'All rights reserved'
    },
    projects: {
      backToHome: 'Back to home',
      badge: 'My Projects',
      title: 'Portfolio',
      subtitle: 'A collection of projects showcasing my approach to UX design and development',
      aboutMe: {
        title: 'About Me',
        intro: "I'm Mari, a UX designer with a background in psychology and informatics. I combine research, design, and technical understanding to create meaningful digital experiences.",
        background: "My journey into UX design started with psychology studies at NTNU, where I developed a deep understanding of human behavior and qualitative research methods. This foundation, combined with my informatics education at UiO, gives me a unique perspective on how technology can serve users' needs.",
        approach: "I thrive in collaborative environments where I can work across disciplines. Whether I'm conducting user research, facilitating design workshops, or working closely with developers, my goal is always to advocate for the user while balancing business goals and technical constraints.",
        passion: 'What drives me is the opportunity to solve real problems for real people - creating solutions that are not just functional, but delightful to use.'
      },
      comingSoon: 'More projects coming soon!',
      comingSoonDesc: 'I am continuously working on new projects and case studies. Check back later to see more of my work.',
      technologies: 'Technologies:',
      highlights: 'Highlights:',
      viewPrototype: 'View interactive prototype',
      cards: {
        fullstack: {
          title: 'Fullstack',
          desc: 'From design to code'
        },
        userInsight: {
          title: 'User Insights',
          desc: 'Research and testing'
        },
        iterative: {
          title: 'Iterative',
          desc: 'Continuous improvement'
        }
      },
      list: {
        sioKiosk: {
          title: 'SIO Self-Service Kiosk',
          category: 'UX Design & Prototyping',
          description: 'Project to create a more user-friendly kiosk that SIO can use in the cafeteria. Focus on usability and high-fidelity prototype.',
          highlights: [
            'User-friendliness, high-fidelity prototype',
            'Design of complex user flow for food ordering',
            'Focus on accessibility and intuitive interface'
          ],
          detail: {
            backToProjects: 'Back to projects',
            subtitle: 'Interactive prototype of a self-service kiosk for SIO (Studentsamskipnaden i Oslo). Student project from the IN2020 course at UiO.',
            openInFigma: 'Open in Figma',
            prototypeTitle: 'Interactive Prototype',
            prototypeDescription: 'Designed in Figma as part of a student project. The prototype shows the user flow for food ordering via self-service kiosk.',
            aboutTitle: 'About the project',
            aboutDescription: 'This was a university project where the goal was to design a user-friendly self-service kiosk for SIO. The focus was on creating an intuitive user experience that makes food ordering quick and easy.',
            period: 'Period:',
            periodValue: 'IN2020 (UiO)',
            role: 'Role:',
            roleValue: 'UX Designer & Prototyper',
            focusTitle: 'Focus areas',
            focusItems: [
              'User-friendly interface for quick purchase',
              'Clear product display with images',
              'Real-time shopping cart overview',
              'Allergen information clearly visible'
            ]
          }
        },
        in1060: {
          title: 'User-Oriented Design',
          category: 'UX Research & Product Design',
          description: 'Group project in IN1060: user-oriented design. Semester project with focus on qualitative data collection, prototyping, and user testing.',
          highlights: [
            'Moodboard',
            'Qualitative data collection, pilot interview, semi-structured interview',
            'Prototyping, low and high-fidelity, 3D modeling/printing',
            'User evaluation'
          ]
        },
        airFilter: {
          title: 'Introduction to Design, Use, Interaction',
          category: 'Product Design & UX Research',
          description: 'Semester project in introduction to design, use, interaction. Comprehensive project with focus on user insights, prototyping, and evaluation.',
          highlights: [
            'Moodboard',
            'Qualitative data collection, pilot interview, semi-structured interview, thematic analysis',
            'Prototyping, low and high-fidelity, 3D modeling',
            'User evaluation → demonstration/think-aloud/interview'
          ]
        },
        psychology: {
          title: 'Bachelor Thesis in Psychology',
          category: 'Qualitative Research Method',
          description: 'Bachelor thesis in psychology with focus on qualitative data collection and analysis. Applied research methods include pilot interview, semi-structured interview, and thematic analysis.',
          highlights: [
            'Qualitative data collection',
            'Pilot interview, semi-structured interview, thematic analysis'
          ]
        },
        portfolio: {
          title: 'Portfolio Website',
          category: 'Web Development & UX Design',
          description: 'Designed my CV in Figma and transformed it into a modern portfolio website using Figma Make. The process involved importing the Figma design, iterating on functionality and layout, and collaborating with AI to build a responsive website with React and Tailwind CSS.',
          highlights: [
            'CV design in Figma',
            'Used Figma Make (AI) to transform design to code',
            'Iterative process with testing and improvements',
            'Learned about modern web technologies along the way'
          ]
        }
      }
    },
    story: {
      title: 'My Story',
      subtitle: 'The journey from high school to UX designer',
      scrollPrompt: 'Scroll to explore my journey',
      funFact: {
        badge: '✨ Fun Fact',
        title: 'From Psychology to Code',
        description: "My journey might seem unconventional, but it's the perfect combination! Psychology taught me to understand people, informatics gave me the tools to create solutions, and UX design lets me bring it all together to make meaningful digital experiences."
      },
      timeline: {
        highSchool: {
          year: '2020',
          title: 'High School Graduate',
          description: 'Finished high school and was ready for new adventures. Decided to study psychology to understand people better.'
        },
        ntnu: {
          year: '2020-2022',
          title: 'Psychology Studies at NTNU',
          description: 'Studied psychology at NTNU in Trondheim. Learned about human behavior, research methods, and completed my bachelor thesis with qualitative interviews and thematic analysis.',
          highlights: ['Qualitative research', 'Bachelor thesis', 'Understanding human behavior']
        },
        uio: {
          year: '2022-2024',
          title: 'Informatics at UiO',
          description: 'Switched to informatics with focus on Design, Use and Interaction at University of Oslo. Discovered my passion for UX design through user-centered projects.',
          highlights: ['UX design projects', 'User research', 'Prototyping', '3D modeling']
        },
        advania: {
          year: '2023-2024',
          title: 'IT Support at Advania',
          description: 'Worked as IT Support Technician while studying. Gained experience in customer service and technical problem-solving.',
          highlights: ['Technical support', 'Customer service', 'Problem-solving']
        },
        aibel: {
          year: '2024-Present',
          title: 'UX Designer at Aibel',
          description: 'Working as UX Designer focusing on design systems, user insights, and product development. Also serving as Scrum Master.',
          highlights: ['Design systems', 'User research', 'Scrum Master', 'Product development']
        }
      }
    }
  },
  no: {
    nav: {
      projects: 'Prosjekter',
      about: 'Om meg',
      experience: 'Erfaring',
      contact: 'Kontakt',
      myStory: 'Min Historie'
    },
    hero: {
      name: 'Mari Svennevik Notland',
      description: 'Som UX-designer brenner jeg for å skape intuitive og brukervennlige opplevelser. Med erfaring fra hele designprosessen - fra research og prototyping til brukertesting og implementering - kombinerer jeg innsikt i psykologi, teknologi og design for å løse komplekse problemer.',
      viewProjects: 'Se mine prosjekter',
      phone: '47709654'
    },
    skills: {
      title: 'Ferdigheter & verktøy',
      subtitle: 'Min tverrfaglige bakgrunn gir meg en unik forståelse av både design, utviklingsprosessen og teamdynamikk.',
      uxDesign: 'UX Design',
      scrumProject: 'Scrum & Prosjektledelse',
      development: 'Utvikling',
      skills: {
        figma: 'Figma & Prototyping',
        designSystem: 'Designsystem',
        userResearch: 'User Research',
        contextualInquiry: 'Contextual Inquiry',
        personas: 'Personas & Journey Mapping',
        usabilityTesting: 'Usability Testing',
        designThinking: 'Design Thinking',
        universalDesign: 'Universell utforming',
        thematicAnalysis: 'Tematisk analyse',
        scrumMaster: 'Scrum Master',
        facilitation: 'Fasilitering (Daily, Planning, Retro)',
        agile: 'Smidig metodikk',
        roadmaps: 'Roadmaps',
        kanban: 'Kanban',
        prioritization: 'Prioritering',
        workshopFacilitation: 'Workshop-fasilitering',
        crossFunctional: 'Tverrfaglig samarbeid',
        python: 'Python, Java, Kotlin',
        webTech: 'HTML, CSS, JavaScript',
        react: 'React & SQL',
        github: 'GitHub',
        tools: 'Android Studio & VS Code'
      }
    },
    experience: {
      title: 'Erfaring & utdanning',
      subtitle: 'Min bakgrunn kombinerer design, psykologi og teknologi.',
      work: {
        aibel: {
          period: 'juli 2024 - nå',
          title: 'UX Designer',
          organization: 'Aibel',
          description: 'Designsystemer, brukerinnsikt og produktutvikling. Scrum Master januar 2025 - september 2025'
        },
        advania: {
          period: 'juli 2023 - mai 2024',
          title: 'IT support technician',
          organization: 'Advania',
          description: 'Teknisk support og kundeservice'
        }
      },
      education: {
        uio: {
          period: '2022 - 2024',
          title: 'Bachelor, informatikk, design bruk og interaksjon',
          organization: 'Universitetet i Oslo'
        },
        ntnu: {
          period: '2020 - 2022',
          title: 'Bachelor i psykologi',
          organization: 'Norges teknisk-naturvitenskapelige universitet'
        }
      }
    },
    contact: {
      title: 'La oss samarbeide',
      subtitle: 'Jeg er alltid åpen for nye muligheter og interessante prosjekter. Ta gjerne kontakt hvis du vil diskutere et samarbeid eller bare ta en kaffe.',
      email: 'E-post',
      phone: 'Telefon',
      form: {
        name: 'Navn',
        namePlaceholder: 'Ditt navn',
        email: 'E-post',
        emailPlaceholder: 'din@epost.no',
        message: 'Melding',
        messagePlaceholder: 'Fortell meg om ditt prosjekt eller idé...',
        submit: 'Send melding',
        sending: 'Sender...',
        success: 'Melding sendt! Jeg tar kontakt snart.',
        error: 'Noe gikk galt. Prøv igjen eller send e-post direkte.'
      }
    },
    footer: {
      tagline: 'UX Designer med fokus på brukervennlige og intuitive løsninger',
      navigation: 'Navigasjon',
      home: 'Hjem',
      projects: 'Prosjekter',
      experience: 'Erfaring',
      contact: 'Kontakt',
      socialContact: 'Kontakt',
      copyright: 'Alle rettigheter reservert'
    },
    projects: {
      backToHome: 'Tilbake til hjem',
      badge: 'Mine Prosjekter',
      title: 'Portefølje',
      subtitle: 'En samling av prosjekter som viser min tilnærming til UX design og utvikling',
      aboutMe: {
        title: 'Om meg',
        intro: 'Jeg er Mari, en UX-designer med bakgrunn i psykologi og informatikk. Jeg kombinerer research, design og teknisk forståelse for å skape meningsfulle digitale opplevelser.',
        background: 'Min reise inn i UX-design startet med psykologistudier på NTNU, hvor jeg utviklet en dyp forståelse for menneskelig atferd og kvalitative forskningsmetoder. Dette fundamentet, kombinert med min informatikkutdanning fra UiO, gir meg et unikt perspektiv på hvordan teknologi kan tjene brukernes behov.',
        approach: 'Jeg trives i samarbeidsmiljøer hvor jeg kan jobbe på tvers av fagområder. Enten jeg gjennomfører brukerundersøkelser, fasiliterer designworkshops eller jobber tett med utviklere, er målet mitt alltid å være brukerens advokat samtidig som jeg balanserer forretningsmål og tekniske begrensninger.',
        passion: 'Det som driver meg er muligheten til å løse reelle problemer for reelle mennesker - å skape løsninger som ikke bare er funksjonelle, men også gir glede i bruk.'
      },
      comingSoon: 'Flere prosjekter kommer snart!',
      comingSoonDesc: 'Jeg jobber kontinuerlig med nye prosjekter og case studies. Kom tilbake senere for å se mer av mitt arbeid.',
      technologies: 'Teknologier:',
      highlights: 'Høydepunkter:',
      viewPrototype: 'Se interaktiv prototype',
      cards: {
        fullstack: {
          title: 'Fullstack',
          desc: 'Fra design til kode'
        },
        userInsight: {
          title: 'Brukerinnsikt',
          desc: 'Research og testing'
        },
        iterative: {
          title: 'Iterativ',
          desc: 'Kontinuerlig forbedring'
        }
      },
      list: {
        sioKiosk: {
          title: 'SIO Selvbetjeningskiosk',
          category: 'UX Design & Prototyping',
          description: 'Oppgave om å lage mer brukervennlig kiosk som SIO kan bruke i kantina. Fokus på brukervennlighet og høyoppløselig prototype.',
          highlights: [
            'Brukervennlighet, høyoppløselig prototype',
            'Design av kompleks brukerflyt for matbestilling',
            'Fokus på tilgjengelighet og intuitivt grensesnitt'
          ],
          detail: {
            backToProjects: 'Tilbake til prosjekter',
            subtitle: 'Interaktiv prototype av en selvbetjeningskiosk for SIO (Studentsamskipnaden i Oslo). Studentprosjekt fra IN2020-kurset ved UiO.',
            openInFigma: 'Åpne i Figma',
            prototypeTitle: 'Interaktiv Prototype',
            prototypeDescription: 'Designet i Figma som en del av et studentprosjekt. Prototypen viser brukerflyt for matbestilling via selvbetjeningskiosk.',
            aboutTitle: 'Om prosjektet',
            aboutDescription: 'Dette var et universitetsprosjekt hvor målet var å designe en brukervennlig selvbetjeningskiosk for SIO. Fokuset lå på å skape en intuitiv brukeropplevelse som gjør matbestilling rask og enkel.',
            period: 'Periode:',
            periodValue: 'IN2020 (UiO)',
            role: 'Rolle:',
            roleValue: 'UX Designer & Prototyper',
            focusTitle: 'Fokusområder',
            focusItems: [
              'Brukervennlig interface for raskt kjøp',
              'Tydelig produktvisning med bilder',
              'Handlekurv-oversikt i sanntid',
              'Allergeninformasjon godt synlig'
            ]
          }
        },
        in1060: {
          title: 'Brukerorientert Design',
          category: 'UX Research & Produktdesign',
          description: 'Gruppeprosjekt i IN1060: brukerorientert design. Semesteroppgave med fokus på kvalitativ datainnsamling, prototyping og brukertest.',
          highlights: [
            'Moodboard',
            'Kvalitativ datainnsamling, pilotintervju, semi-strukturert intervju',
            'Prototyping, lav og høyoppløselig, 3D modellering/printing',
            'Evaluering med bruker'
          ]
        },
        airFilter: {
          title: 'Introduksjon til Design, Bruk, Interaksjon',
          category: 'Produktdesign & UX Research',
          description: 'Semesteroppgave i introduksjon til design, bruk, interaksjon. Omfattende prosjekt med fokus på brukerinnsikt, prototyping og evaluering.',
          highlights: [
            'Moodboard',
            'Kvalitativ datainnsamling, pilotintervju, semi-strukturert intervju, tematisk analyse',
            'Prototyping, lav og høyoppløselig, 3D modellering',
            'Evaluering med bruker → demonstrasjon/think-aloud/intervju'
          ]
        },
        psychology: {
          title: 'Bacheloroppgave i Psykologi',
          category: 'Kvalitativ Forskningsmetode',
          description: 'Bachelor oppgave i psykologi med fokus på kvalitativ datainnsamling og analyse. Anvendte forskningsmetoder inkluderer pilotintervju, semi-strukturert intervju og tematisk analyse.',
          highlights: [
            'Kvalitativ datainnsamling',
            'Pilotintervju, semi-strukturert intervju, tematisk analyse'
          ]
        },
        portfolio: {
          title: 'Porteføljenettsiden',
          category: 'Web Development & UX Design',
          description: 'Designet mitt CV i Figma og transformerte det til en moderne porteføljenettside ved hjelp av Figma Make. Prosessen innebar å importere Figma-designet, iterere på funksjonalitet og layout, og samarbeide med AI for å bygge en responsiv nettside med React og Tailwind CSS.',
          highlights: [
            'CV-design i Figma',
            'Brukt Figma Make (AI) for å transformere design til kode',
            'Iterativ prosess med testing og forbedringer',
            'Lært om moderne web-teknologier underveis'
          ]
        }
      }
    },
    story: {
      title: 'Min Historie',
      subtitle: 'Reisen fra videregående til UX-designer',
      scrollPrompt: 'Scroll for å utforske min reise',
      funFact: {
        badge: '✨ Morsomt Faktum',
        title: 'Fra Psykologi til Kode',
        description: 'Min reise kan virke utradisjonell, men det er den perfekte kombinasjonen! Psykologi lærte meg å forstå mennesker, informatikk ga meg verktøyene til å skape løsninger, og UX-design lar meg kombinere alt for å lage meningsfulle digitale opplevelser.'
      },
      timeline: {
        highSchool: {
          year: '2020',
          title: 'Fullført videregående',
          description: 'Fullførte videregående og var klar for nye eventyr. Bestemte meg for å studere psykologi for å forstå mennesker bedre.'
        },
        ntnu: {
          year: '2020-2022',
          title: 'Psykologistudier på NTNU',
          description: 'Studerte psykologi på NTNU i Trondheim. Lærte om menneskelig atferd, forskningsmetoder, og gjennomførte bacheloroppgave med kvalitative intervjuer og tematisk analyse.',
          highlights: ['Kvalitativ forskning', 'Bacheloroppgave', 'Forståelse av menneskelig atferd']
        },
        uio: {
          year: '2022-2024',
          title: 'Informatikk på UiO',
          description: 'Byttet til informatikk med fokus på Design, Bruk og Interaksjon ved Universitetet i Oslo. Oppdaget min lidenskap for UX-design gjennom brukersentrerte prosjekter.',
          highlights: ['UX-designprosjekter', 'Brukerundersøkelser', 'Prototyping', '3D-modellering']
        },
        advania: {
          year: '2023-2024',
          title: 'IT Support på Advania',
          description: 'Jobbet som IT Support Technician mens jeg studerte. Fikk erfaring med kundeservice og teknisk problemløsning.',
          highlights: ['Teknisk support', 'Kundeservice', 'Problemløsning']
        },
        aibel: {
          year: '2024-Nå',
          title: 'UX Designer hos Aibel',
          description: 'Jobber som UX Designer med fokus på designsystemer, brukerinnsikt og produktutvikling. Fungerer også som Scrum Master.',
          highlights: ['Designsystemer', 'Brukerundersøkelser', 'Scrum Master', 'Produktutvikling']
        }
      }
    }
  }
};
