export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Drone Quotation Calculator',
    desc: 'The Drone Quotation Calculator is an innovative tool designed to simplify the process of estimating drone project costs. It provides precise and customizable quotations tailored to client requirements, ensuring efficiency and accuracy.',
    subdesc: 'Developed as a responsive web application using HTML, CSS, and JavaScript, it is optimized for seamless performance and user-friendly interaction.',
    texture: '/textures/project/Project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Water Reservoir Watch',
    desc: 'Water Reservoir Watch is a comprehensive tool designed to monitor and manage reservoir levels with real-time data visualization, ensuring efficient water resource management and decision-making.',
    subdesc: 'Built with modern web technologies, it offers interactive dashboards and predictive analytics for seamless monitoring and planning.',
    texture: '/textures/project/Project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/typescript.png',
      },
      ,
      {
        id: 4,
        name: 'Google API',
        path: '/assets/API.png',
      },
    ],
  },
  {
    title: 'Chess Dashboard',
    desc: 'A feature-rich platform designed for chess enthusiasts to analyze, track, and improve their gameplay. It provides real-time game statistics, performance insights, and personalized recommendations for players of all levels.',
    subdesc: 'Leveraging modern technologies, the dashboard ensures smooth navigation, interactive visuals, and real-time updates to enhance the user experience.',
    texture: '/textures/project/Project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 5,
        name: 'Node JS',
        path: '/assets/framer.png',
      }
    ],
  },
  {
    title: 'Ahmedabad City Dashboard',
    desc: 'Ahmedabad City Dashboard is an interactive platform designed to provide a centralized view of key city data. It empowers users to explore real-time statistics, geospatial insights, and critical information for better decision-making.',
    subdesc: 'Developed using modern web technologies, the dashboard ensures a seamless experience with responsive design, interactive maps, and real-time data integration tailored for urban management needs.',
    texture: '/textures/project/Project4.mp4',
    logo: '/assets/logoAcc.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/typescript.png',
      }
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'AccionLAND PRIVATE LIMITED',
    pos: 'Frontend Developer Intern',
    duration: '2023 - Present',
    title: "As a Frontend Developer, I specialize in creating responsive and interactive user interfaces using modern web technologies. My work involves transforming designs into functional, user-friendly applications while ensuring cross-browser compatibility and performance optimization. I collaborate closely with designers and backend developers to deliver seamless experiences that meet user needs and project goals.",
    icon: '/assets/logoAcc.svg',
    animation: 'idle',
  }
];