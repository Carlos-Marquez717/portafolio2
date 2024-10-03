
import phpLogo from '../../../img/php.png';


export const studies = [
  {
    title: "Técnico en Informatica",
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
    img: "../../../img/TIENDAONLINE.png",
    title: "TIENDA ONLINE",
    link: "https://tiendaonline.carlosma.cash/login/",
    description: `APLICACION WEB PARA TIENDA ONLINE DE VENTA DE ZAPATOS`,
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
        img: "../../../img/inertiajs.png", // Agregar Laravel
        title: "",
      },
      {
        img: "../../../img/mysql.png", // Agregar Laravel
        title: "",
      },


    ],
  },
  {
    img: "../../../img/movie.webp",
    title: "BIBILIAPP",
    link: "",
    description: ` La Biblia Interactiva es una aplicación web diseñada para facilitar el acceso a las Escrituras de manera intuitiva y envolvente`,
    technologies: [
      {
        img: "../../../img/vue.webp", 
        title: "",
      },
      {
        img: "../../../img/django.png", 
        title: "",
      },
      {
        img: "../../../img/tailwind.webp", 
        title: "",
      },

    ],
  },
  {
    img: "../../../img/cyberpunk.webp",
    title: "NOTIWEB",
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

 
];




