



export const navLinks = [
    {
      id: "home",
      title: "home",
    },
    {
      id: "about",
      title: "about",
    },
    {
      id: "projects",
      title: "projects",
    },
    {
        id: "contact",
        title: "contact",
      },
];

export const computerCanvasPositions : {[key : string] : any} = {
  "mobile" : {
    scale : 0.8,
    // position : [1, -2.25, -1.5],
    position : {
      "ltr" : [1, -2.25, -0.5],
      "rtl" : [1, -2.25, -0.5]
    }
  },   
  "xs" : {
    scale : 1.2,
    // position : [3, -1.5, -0.5]
    position : {
      "ltr" : [3, -1.5, -0.5],
      "rtl" : [3, -1.5, -0.5]
    }
  }, 
  "sm" : {
    scale : 1.3,
    // position : [3, -2.25, -0.5]
    position : {
      "ltr" : [3, -2.25, -0.5],
      "rtl" : [3, -2.25, -0.5]
    }
  },      
  "md" : {
    scale : 1.2,
    // position : [1, -2.25, -1.5]
    position : {
      "ltr" : [1, -2.25, -1.5],
      "rtl" : [1, -2.25, -1.5]
    }
  },   
  "lg" : {
    scale : 1,
    position : {
      "ltr" : [1, -2.25, -1.5],
      "rtl" : [1, -2.25, -0.5]
    }
    // position : [1, -2.25, -0.5]
  },   
  "xl" : {
    scale : 1.1,
    position : {
      "ltr" : [1, -2.25, -2],
      "rtl" : [1, -2.25, -0.5]
    }
    // position : [1, -2.25, -0.5]
  },    
}

export const skillsIcons = [
  {
    id : 1,
    name: "Javascript",
    image : "/assets/skills/javascript.svg"
  },
  {
    id : 2,
    name: "CSS",
    image : "/assets/skills/css.svg"
  },
  {
    id : 3,
    name: "HTML",
    image : "/assets/skills/html.svg"
  },
  {
    id : 4,
    name: "Typescript",
    image : "/assets/skills/typescript.svg"
  },
  {
    id : 5,
    name: "React js",
    image : "/assets/skills/reactjs.svg"
  },
  {
    id : 6,
    name: "Redux",
    image : "/assets/skills/redux.svg"
  },
  {
    id : 7,
    name: "Next js",
    image : "/assets/skills/nextjs.svg"
  },
  {
    id : 8,
    name: "Tailwindcss",
    image : "/assets/skills/tailwindcss.svg"
  },
  { 
    id : 9,
    name: "Framer Motion",
    image : "/assets/skills/framermotion.svg"
  },
  {
    id : 10,
    name: "Bootstrap",
    image : "/assets/skills/bootstrap.svg"
  },
  {
    id : 11,
    name: "Nodejs",
    image : "/assets/skills/nodejs.svg"
  },
  {
    id : 12,
    name: "Python",
    image : "/assets/skills/python.svg"
  },
  {
    id : 13,
    name: "Django",
    image : "/assets/skills/django.svg"
  },
  {
    id : 14,
    name: "Django Rest Framework",
    image : "/assets/skills/djangorest.svg"
  },
  {
    id : 15,
    name: "Mysql",
    image : "/assets/skills/mysql.svg"
  },
  {
    id : 16,
    name: "Prisma",
    image : "/assets/skills/prisma.svg"
  }
]


export const porjects = [
  {
    name : 'university managment system',
    image : '/assets/projects/renovado.png',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut amet est possimus earum officia vero.',
    demoLink : 'https://renovado-ruddy.vercel.app/',
    sourceCode : ''
  },
  {
    name : 'Plura',
    image : '/assets/projects/renovado.png',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut amet est possimus earum officia vero.',
    demoLink : 'https://renovado-ruddy.vercel.app/',
    sourceCode : ''
  },
  {
    name : 'vehicle routing problem API',
    image : '/assets/projects/renovado.png',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut amet est possimus earum officia vero.',
    demoLink : 'https://renovado-ruddy.vercel.app/',
    sourceCode : ''
  },
  {
    name : 'Ecommerce Delivery Mobile App',
    image : '/assets/projects/boutiqueservicesinfo.png',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut amet est possimus earum officia vero.',
    demoLink : 'https://renovado-ruddy.vercel.app/',
    sourceCode : ''
  },
  // {
  //   name : 'Youtube Clone',
  //   image : '/assets/projects/boutiqueservicesinfo.png',
  //   description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut amet est possimus earum officia vero.',
  //   demoLink : 'https://renovado-ruddy.vercel.app/',
  //   sourceCode : ''
  // },
  {
    name : 'Renovado',
    image : '/assets/projects/renovado.png',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut amet est possimus earum officia vero.',
    demoLink : 'https://renovado-ruddy.vercel.app/',
    sourceCode : ''
  },
  {
    name : 'boutique services info',
    image : '/assets/projects/boutiqueservicesinfo.png',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut amet est possimus earum officia vero.',
    demoLink : 'https://boutserinfo.com/',
    sourceCode : ''
  }
  
]
  