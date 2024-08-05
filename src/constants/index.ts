



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
    image : "/assets/skills/css1.svg"
  },
  {
    id : 3,
    name: "HTML",
    image : "/assets/skills/html1.svg"
  },
  {
    id : 4,
    name: "Typescript",
    image : "/assets/skills/typescript.svg"
  },
  {
    id : 5,
    name: "React js",
    image : "/assets/skills/reactjs1.svg"
  },
  {
    id : 6,
    name: "Redux",
    image : "/assets/skills/redux1.svg"
  },
  {
    id : 7,
    name: "Next js",
    image : "/assets/skills/nextjs3.svg"
  },
  {
    id : 8,
    name: "Tailwindcss",
    image : "/assets/skills/tailwindcss1.svg"
  },
  { 
    id : 9,
    name: "Framer Motion",
    image : "/assets/skills/framermotion1.svg"
  },
  {
    id : 10,
    name: "Bootstrap",
    image : "/assets/skills/bootstrap.svg"
  },
  {
    id : 11,
    name: "Nodejs",
    image : "/assets/skills/nodejs1.svg"
  },
  {
    id : 12,
    name: "Python",
    image : "/assets/skills/python1.svg"
  },
  {
    id : 13,
    name: "Django",
    image : "/assets/skills/django.svg"
  },
  {
    id : 14,
    name: "Django Rest Framework",
    image : "/assets/skills/djangorestframework1.svg"
  },
  {
    id : 15,
    name: "Mysql",
    image : "/assets/skills/mysql1.svg"
  },
  {
    id : 16,
    name: "Prisma",
    image : "/assets/skills/prisma1.svg"
  }
]


export const projects = [
  {
    name : 'Space Portfolio',
    image : '/assets/projects/spaceportfolio.png',
    description : 'A portfolio website that implements the latest frontend technologies with some 3D space models.',
    tools : ["Html", "CSS", "JS", "React", "Tailwind Css", "Nextjs", "Three js", "Framer Motion"],
    demoLink : 'https://spaceportfolio-gamma.vercel.app/',
    sourceCode : ''
  },
  {
    name : 'Plura',
    image : '/assets/projects/plura.png',
    description : 'A SaaS Website Builder for building simple applications and project Management features with a great dashboard that was built using Stripe , Nextjs , Stripe , Prisma, cockroatchDB and Tailwind',
    tools : ["Html", "CSS", "JS", "Reactjs", "Nextjs", "Tailwind Css", "Prisma", "Stripe", "Clerk"],
    demoLink : 'https://plurapp.vercel.app/',
    sourceCode : ''
  },
  {
    name : 'Apple website clone',
    image : '/assets/projects/apple-website-clone.png',
    description : 'A 3D website that showcases the latest web designs which was inspired from the original apple website working with the latest frontend technologies.',
    demoLink : 'https://apple-website-clone-tau-six.vercel.app/',
    tools : ["Html", "CSS", "JS", "Tailwind Css", "Reactjs", "Next js", "Three js", "Gsap"],
    sourceCode : ''
  },
  {
    name : 'Ecommerce Delivery Mobile App',
    image : '/assets/projects/boutiqueservicesinfo.png',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut amet est possimus earum officia vero.',
    tools : ["Html", "CSS", "JS", "Reactjs", "React Native", "Tomtom maps"],
    demoLink : 'https://renovado-ruddy.vercel.app/',
    sourceCode : 'https://github.com/yacin999/eCommerceDeliveryApp'
  },
  {
    name : 'Renovado',
    image : '/assets/projects/renovado.png',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut amet est possimus earum officia vero.',
    tools : ["Html", "CSS", "JS", "Tailwind", "Reactjs", "Nextjs", "Zod"],
    demoLink : 'https://renovado-ruddy.vercel.app/',
    sourceCode : ''
  },
  {
    name : 'boutique services info',
    image : '/assets/projects/boutiqueservicesinfo.png',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut amet est possimus earum officia vero.',
    tools : ["Html", "CSS", "JS", "Bootstrap"],
    demoLink : 'https://boutserinfo.com/',
    sourceCode : ''
  }
  
]

export const socialMedia = [
  {
    name : "facebook",
    component : "Facebook",
    link : "https://www.facebook.com/yacin.pitcho/"
  },
  {
    name : "linkedin",
    component : "LinkedIn",
    link : "https://www.linkedin.com/in/kelalech-omar-51a6ab198/"
  },
  {
    name : "github",
    component : "Github",
    link : "https://github.com/yacin999"
  }
]
  