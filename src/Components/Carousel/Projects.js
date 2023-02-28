import DuckerIcon from '../../assets/Ducker-icon.webp';
import DuckerBackground from '../../assets/Ducker-background.webp';
import RockStarPlaceIcon from '../../assets/Rockstar-place-icon.webp';
import RockStarPlaceBackground from '../../assets/Rockstar-place-background.webp';
import PokemonIcon from '../../assets/Pokemon-icon.webp';
import PokemonBackground from '../../assets/Pokemon-background.webp';
import AcademicaUdeAIcon from '../../assets/Academica-Udea-Icon.webp';
import AcademicaUdeABackground from '../../assets/Academica-Udea-background.webp';

export const projectsInfo = [
  {
    project: 'Ducker',
    image: DuckerIcon,
    background: DuckerBackground,
    description:
      'Ducker es una red social inspirada en el desarrollo de Twitter',
    role: 'Desarrollador Fullstack. Integración del equipo, desarrollo y mejoramiento del código. Planteamiento del proyecto y requerimientos básicos iniciales. \n Desarrollo frontend basado en el consumo de api y experiencia de usuario con base a Twitter.\n  Desarrollo backend enfocado en la optimización de rutas, la seguridad y el entendimiento.',
    stack: [
      'JavaScript',
      'TypeScript',
      'NodeJS',
      'React',
      'Express',
      'Redux',
      'Sass',
      'MongoDB',
      'Axios',
      'Otros.',
    ],
    achievements: [],
    repository: [
      { type: 'Backend', link: 'https://github.com/Sebastian-pz/ducker-api' },
      { type: 'Frontend', link: 'https://github.com/Sebastian-pz/ducker' },
    ],
  },
  {
    project: 'Rockstar place',
    image: RockStarPlaceIcon,
    background: RockStarPlaceBackground,
    description:
      'Rockstar place es una aplicación web diseñada para conectar locales con bandas de música.',
    role: 'Desarrollador Fullstack. Principalmente enfocado en el desarrollo de la lógica de la aplicación tanto en el backend como en el frontend.',
    stack: [
      'JavaScript',
      'NodeJS',
      'React',
      'Express',
      'Redux',
      'Mongoose',
      'MongoDB',
      'Passport',
      'TypeScript',
      'Axios',
      'Otros.',
    ],
    achievements: [],
    repository: [
      {
        type: 'Full',
        link: 'https://github.com/Sebastian-pz/PF-RockStar_Place',
      },
    ],
  },
  {
    project: 'PokemonApi',
    image: PokemonIcon,
    background: PokemonBackground,
    description: 'Pokemon Api es una aplicación de consumo de API',
    role: 'Desarrollador Fullstack. Crear una aplicación consumiendo una API integrando una base de datos relacional para el proceso CRUD (consultar, crear, modificar y eliminar pokemons). \n Diseñar el aspecto visual de la página y la logica de renderizado.',
    stack: [
      'JavaScript',
      'NodeJS',
      'Express',
      'React',
      'PostgreSQL',
      'CSS',
      'Styled components',
      'Otros.',
    ],
    achievements: [],
    repository: [
      {
        type: 'Full',
        link: 'https://github.com/Sebastian-pz/pokemon-demo-app',
      },
    ],
  },
  {
    project: 'Academica UdeA',
    image: AcademicaUdeAIcon,
    background: AcademicaUdeABackground,
    description:
      'Academica es una aplicación web desarrollada para simular el comportamiento de una página universitaria.',
    role: 'Desarrollador Fullstack. Desarrollo de la aplicación. \n Desarrollo desde cero utilizando el Stack MERN.',
    stack: [
      'JavaScript',
      'NodeJS',
      'React',
      'MongoDb',
      'GraphQL',
      'JWT',
      'Bootstrap',
      'Docker',
      'Otros.',
    ],
    achievements: [],
    repository: [
      {
        type: 'Backend',
        link: 'https://github.com/Sebastian-pz/AP-UdeA-Backend',
      },
      {
        type: 'Frontend',
        link: 'https://github.com/Sebastian-pz/AP-UdeA-Frontend',
      },
    ],
  },
];
