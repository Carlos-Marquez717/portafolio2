

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
    link: "https://github.com/Carlos-Marquez717/prestamos",
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
    link: "https://github.com/Carlos-Marquez717/SOFTCONT",
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
    description: `Sistema administrativo para el departamento de mantención.

    Problema:
    Procesos manuales dispersos y falta de centralización de información.

    Solución:
    Sistema backend con ASP.NET Core para digitalizar y centralizar operaciones.

    Arquitectura:
    Usuario → React (Frontend) → ASP.NET Core (API) → PostgreSQL → Reportes

    Impacto:
    ✓ Digitalización 100% de procesos
    ✓ Reportes centralizados
    ✓ Mejora operativa en planta minera`,
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
    description: `Plataforma e-commerce para gestión de ventas digitales.

    Problema:
    Necesidad de sistema de ventas online con pagos seguros y administración.

    Solución:
    Desarrollo de tienda online con Laravel + Vue para automatizar proceso de compra.

    Arquitectura:
    Cliente → Vue.js + Inertia → Laravel (Backend) → MySQL → Integración Webpay

    Impacto:
    ✓ Automatización de ventas
    ✓ Integración de pagos seguros
    ✓ Mejora en experiencia de usuario`,
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
    description: `Plataforma interna para control de insumos, herramientas y licencias.

    Problema:
    Falta de control y trazabilidad en operaciones de faena.

    Solución:
    Sistema backend con Django para gestión y auditoría operativa.

    Arquitectura:
    Usuario → Vue.js → Django Backend → PostgreSQL → Validación QR

    Impacto:
     ✓ Control de stock y trazabilidad
     ✓ Gestión de licencias internas
     ✓ Mejora en auditoría de procesos`,
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
   description: `Aplicación web de noticias moderna y dinámica.

   Problema:
   Necesidad de plataforma escalable para publicación de contenido.

   Solución:
   Aplicación desarrollada con Ruby on Rails y React.

   Arquitectura:
   Usuario → React → Ruby on Rails → PostgreSQL

   Impacto:
   ✓ Plataforma dinámica de contenido
   ✓ Arquitectura desacoplada
   ✓ Escalabilidad en publicación de noticias`,
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
  {
  img: "../../../img/supportdesk-lite-api.png",
  title: "SUPPORTDESK LITE API",
  link: "https://github.com/Carlos-Marquez717/supportdesk-lite",
  description: `API backend para gestion de tickets de soporte con SLA, asignaciones, comentarios, auditoria y dashboard operacional.

  Problema:
  Los equipos de soporte necesitan centralizar solicitudes, controlar tiempos de respuesta y mantener trazabilidad de cada accion realizada sobre un ticket.

  Solución:
  Desarrollo de una API REST con Spring Boot para gestionar tickets, agentes, comentarios, estados, asignaciones, auditoria y metricas operacionales.

  Arquitectura:
  Cliente / Swagger UI → Spring Boot API → JPA / Hibernate → PostgreSQL / SQLite → Dashboard y eventos de auditoria

  Impacto:
   ✓ Gestion centralizada de tickets
   ✓ Calculo automatico de SLA por prioridad
   ✓ Trazabilidad mediante eventos de auditoria
   ✓ Endpoints documentados con Swagger/OpenAPI
   ✓ Perfil local portable con SQLite para demo`,
  technologies: [
    {
      img: "../../../img/java.png",
      title: "",
    },
    {
      img: "../../../img/springboot.png",
      title: "",
    },
    {
      img: "../../../img/postgres.png",
      title: "",
    },
    {
      img: "../../../img/docker.png",
      title: "",
    },
  ],
},


 
];




