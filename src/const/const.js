
import phpLogo from './public/img/php.png';


export const studies = [
  {
    title: "Técnico en Informaticfa",
    corporation: "ETC Eliodoro Pineda - Barquisimeto (Venezuela) ",
    date: "09/2003 – 07/2006",
  },
  {
    title: "Ingeniero de Sistemas",
    corporation: "Universidad Nacional Politecnica De La Fuerza Armada - Barquisimeto (Venezuela)",
    date: "03/2009 – 07/2016",
  },
  {
    title: "Curso profesional de Vue js y React Js",
    corporation: "Udemy - Remoto",
    date: "04/2019 – 07/2019",
  },
  {
    title: "Curso profesional de Django y Flask",
    corporation: "Telecapp - Remoto",
    date: "07/2019 – 04/2020",
  },
  {
    title: "Curso profesional de Ruby on rails",
    corporation: "Inforcap - Chile",
    date: "02/2022 – 07/2022",
  },


];

export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javaScript",
  react: "react",
  astro: "astro",
  materialUi: "materialUi",
  nextjs: "nextjs",
  redux: "redux",
  styled: "styled",
  tailwind: "tailwind",
  radix: "radix",
  reactQuery: "reactQuery",
  typeScript: "typeScript",
  zustand: "zustand",
  git: "git",
  github: "github",
  stripe: "stripe",
  shadcn: "shadcn",
  nodejs: "nodejs",
  mongodb: "mongodb",
  vite: "vite",
  php: phpLogo,

  // here add more icon keys
};

export const skills = [
  {
    title: "Html",
    icon: IconKeys.html,
  },
  {
    title: "Css",
    icon: IconKeys.css,
  },
  {
    title: "JavaScript",
    icon: IconKeys.javaScript,
  },
  {
    title: "Astro",
    icon: IconKeys.astro,
  },
  {
    title: "Tailwindcss",
    icon: IconKeys.tailwind,
  },
  {
    title: "React Js",
    icon: IconKeys.react,
  },
  {
    title: "Next Js",
    icon: IconKeys.nextjs,
  },
  {
    title: "Git",
    icon: IconKeys.git,
  },

  {
    title: "Github",
    icon: IconKeys.github,
  },
  {
    title: "Material UI",
    icon: IconKeys.materialUi,
  },

  {
    title: "Node Js",
    icon: IconKeys.nodejs,
  },

  {
    title: "Vite",
    icon: IconKeys.vite,
  },

  {
    title: "Mongo Db",
    icon: IconKeys.mongodb,
  },
  {
    title: "",
    img: "../../../img/php.png", 
  },
  {
    title: "",
    img: "../../../img/laravel.png", 
  },
  {
    title: "",
    img: "../../../img/react-native.svg", 
  },

  {
    title: "",
    img: "../../../img/python.webp", 
  },
  {
    title: "",
    img: "../../../img/django.png", 
  },
  {
    title: "",
    img: "../../../img/flask.png", 
  },
  {
    title: "",
    img: "../../../img/rails.png", 
  },
  {
    title: "",
    img: "../../../img/vue.webp", 
  },

  {
    title: "",
    img: "../../../img/mysql.png", 
  },
  {
    title: "",
    img: "../../../img/postgres.png", 
  },
  {
    img: "../../../img/jetstream.png", // Agregar Laravel
    title: "",
  },
  {
    img: "../../../img/inertiajs.png", // Agregar Laravel
    title: "",
  },
];

export const projects = [
  {
    img: "../../../img/tasks-manager.png",
    title: "PRESSTAPP",
    link: "https://presstapp.carlosma.cash/login",
    description: `SISTEMA PARA CONTROL Y FACTURACION DE VENTAS  Y PRESTAMOS` ,
    technologies: [

       
      {
        img: "../../../img/php.png", // Agregar Laravel
        title: "",
      },

      {
        img: "../../../img/laravel.png", // Agregar Laravel
        title: "",
      },
      {
        img: "../../../img/tailwindcss.webp", // Agregar Laravel
        title: "",
      },
      {
        img: "../../../img/postgres.png", // Agregar PostgreSQL
        title: "",
      },
      {
        icon: IconKeys.shadcn,
      },
    ],
  },
  {
    img: "../../../img/SOFTCON.png",
    title: "SOFTCON",
    link: "https://softcont-production.up.railway.app/accounts/login/",
    description: `Proyecto FullStack para Registro y Control de Insumos y Herramientas`,
    technologies: [
      {
        img: "../../../img/python.webp", // Agregar Laravel
        title: "",
      },
      {
        img: "../../../img/django.webp", // Agregar PHP
        title: "",
      },


      {
        img: "../../../img/Bootstrap.png", // Agregar Django
        title: "",
      },
      {
        img: "../../../img/material.png", // Agregar PostgreSQL
        title: "",
      },

      {
        img: "../../../img/postgres.png", // Agregar PostgreSQL
        title: "",
      },
    ],
  },
  {
    img: "../../../img/SISGAM.png",
    title: "SISGAM",
    link: "https://nexanime.vercel.app",
    description: `SISTEMA GESTOR ADMINISTRATIVO PARA DEPARTAMENTO MANTENCION - ALMACENAR E INGRSAR CARTILLAS DE TRABAJOS`,
    technologies: [
      {
        img: "../../../img/rails.png", // Agregar PostgreSQL
        title: "",
      },
      {
        img: "../../../img/Bootstrap.png", // Agregar Django
        title: "",
      },

      {
        img: "../../../img/postgres.png", // Agregar PostgreSQL
        title: "",
      },
      {
        img: "../../../img/material.png", // Agregar PostgreSQL
        title: "",
      },
    ],
  },
  {
    img: "../../../img/store-games.webp",
    title: "NOTIWEB",
    link: "https://store-games-site.netlify.app/",
    description: `APLICACION WEB PARA NOTICIAS E INFORMACION`,
    technologies: [
      
    ],
  },
  {
    img: "../../../img/movie.webp",
    title: "BIBILIAPP",
    link: "https://movietvsite.netlify.app/",
    description: `simulando una página de películas , consumiendo la API de themovietv
              donde los usuarios pueden buscar películas y ver trailer.....`,
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
    ],
  },
  {
    img: "../../../img/cyberpunk.webp",
    title: "E-COMMERCE",
    link: "https://preeminent-liger-266356.netlify.app/",
    description: `El E-Commerce de Moda es una plataforma de comercio electrónico moderna y altamente interactiva `,
    technologies: [
      {
        title: "",
        img: "../../../img/php.png", 
      },

      {
        img: "../../../img/laravel.png", 
        title: "",
      },

      {
        img: "../../../img/vue.webp", 
        title: "",
      },

      {
        img: "../../../img/postgres.png", // Agregar Laravel
        title: "",
      },

      {
        img: "../../../img/material.png", // Agregar Laravel
        title: "",
      },
      {
        img: "../../../img/inertiajs.png", // Agregar Laravel
        title: "",
      },

    ],
  },

  {
    img: "../../../img/fit-nation.webp",
    title: "gym",
    link: "https://fitnation.netlify.app/",
    description: `landing page de una gym por ahora es una landing todavia está en
              desarrollo la idea es que los usuarios puedan comprar productos de
              el gym`,
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
    ],
  },
  {
    img: "../../../img/spotify.webp",
    title: "Spotify-Clone",
    link: "https://www.linkedin.com/posts/osnaider-mart%C3%ADnez_clon-de-la-p%C3%A1gina-de-spotify-echo-con-react-activity-7119712602342965248-upgL?utm_source=share&utm_medium=member_desktop",
    description: `Clon de la página de Spotify con autenticación de usuario, reproductor de canciones, etc `,
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.redux,
      },
      {
        icon: IconKeys.reactQuery,
      },
    ],
  },

  {
    img: "../../../img/landing.webp",
    title: "Landing Realidad Virtual",
    link: "https://realityvirtual.netlify.app/",
    description: `landing page de gafas de realidad virtual donde se muestra el
              producto y como funciona`,
    technologies: [
      {
        icon: IconKeys.astro,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
    ],
  },
];




