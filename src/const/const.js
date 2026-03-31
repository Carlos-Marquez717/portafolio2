

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
  python: "python",
  html: "html",
  css: "css",
  javaScript: "javaScript",
  react: "react",
  astro: "astro",
  materialUi: "materialUi",
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
  php: "./public/img/php.png",

  // here add more icon keys
};

export const skills = [
  {
    title: "Python",
    img: "../../../img/python.webp", 
  },
  {
    title: "Django",
    img: "../../../img/django.png", 
  },
  {
    title: "",
    img: "../../../img/csharp.png", 
  },
  {
    title: "",
    img: "../../../img/asp.netcore.png", 
  },
  {
    title: "",
    img: "../../../img/blazor.png", 
  },
  {
    title: "",
    img: "../../../img/php.png", 
  },
  {
    title: "Laravel",
    img: "../../../img/laravel.png", 
  },
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
    title: "",
    img: "../../../img/vue.webp", 
  },
  {
    title: "React Js",
    icon: IconKeys.react,
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
    title: "Git",
    icon: IconKeys.git,
  },

  {
    title: "Github",
    icon: IconKeys.github,
  },
  {
    title: "",
    img: "../../../img/docker.png", 
  },
  {
    title: "",
    img: "../../../img/aws.webp", 
  },

  {
    title: "",
    img: "../../../img/sqlserver.png", 
  },

  {
    title: "Postgre",
    img: "../../../img/postgres.png", 
  },

];

export const projects = [
  {
    img: "../../../img/tasks-manager.png",
    title: "PRESSTAPP",
    link: "https://presstapp.carlosma.cash/login",
    description: `Sistema contable para gestión de cobros y pagos.

    Problema:
    Gestión manual de pagos y generación de reportes financieros poco eficiente.

    Solución:
    Desarrollo de sistema backend con Laravel para automatizar procesos y centralizar información financiera.

    Arquitectura:
    Usuario → Laravel (Backend/API + lógica de negocio) → PostgreSQL → Generación de reportes PDF

    Impacto:
     ✓ Automatización de reportes financieros
     ✓ Mejora en rendimiento del sistema
     ✓ Reducción del 30% en tiempos de procesamiento`,
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
    description: `Sistema para registro y control de insumos y herramientas en bodega de mantención.

    Problema:
    Procesos manuales con baja trazabilidad y control de inventario.
    
    Solución:
    Aplicación web con Django para gestión operativa y automatización de registros.

    Arquitectura:
    Usuario → Django (Backend + lógica) → PostgreSQL → Módulos de QR y generación de PDFs

    Impacto:
     ✓ Digitalización de procesos
     ✓ Mejora en control de inventario
     ✓ Trazabilidad mediante QR
     ✓ Optimización de tiempos de búsqueda`,
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
    link: "",
    description: `Sistema Administrativo para el Departamento de Mantención. 
                  
                 ✔ Digitalización 100% de procesos manuales
                 ✔ Reportes centralizados
                 ✔ Mejora operativa en planta minera`,
    technologies: [
      {
        img: "../../../img/asp.netcore.png", // Agregar PostgreSQL
        title: "",
      },
      {
        img: "../../../img/react.png", // Agregar Django
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
    description: `Tienda Online E-commerce
                   Desarrollo de tienda online para cliente particular. 
                   enfocada en ventas digitales y automatización del proceso de compra. 
                   Implementación de catálogo de productos, carrito de compras, 
                   panel administrativo e integración de pasarela de pago Webpay para transacciones seguras. 
                   Sistema responsive orientado a rendimiento, usabilidad y escalabilidad.
                 `,
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
    img: "../../../img/biblia.png",
    title: "F&S CONTROL",
    link: "",
    description: ` Plataforma Interna para Control de Insumos, Herramientas y Licencias en Faena.
              
              ✓ Emisión y gestión de licencias internas con validación QR
              ✓ Control de stock y trazabilidad de entregas/retiros
              ✓ Reportes operacionales para seguimiento y auditoría `,
    technologies: [
      {
        img: "../../../img/vue.webp", 
        title: "",
      },
      {
        img: "../../../img/django.webp", 
        title: "",
      },
      {
        img: "../../../img/tailwindcss.webp", 
        title: "",
      },
      {
        img: "../../../img/postgres.png", 
        title: "",
      },

    ],
  },
  {
    img: "../../../img/notiweb.png",
    title: "NOTIWEB",
    link: "",
    description: `NOTIWEB es una aplicación de noticias moderna y dinámica, diseñada para ofrecer a los usuarios una experiencia fluida y atractiva`,
    technologies: [
      {
        title: "",
        img: "../../../img/rails.png", 
      },

  
      {
        img: "../../../img/react.png", 
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
  

    ],
  },

 
];




