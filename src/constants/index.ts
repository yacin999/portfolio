



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
    name: "javascript",
    icon : "/assets/skills/javascript.svg"
  },
  {
    name: "css",
    icon : "/assets/skills/css.svg"
  },
  {
    name: "html",
    icon : "/assets/skills/html.svg"
  },
  {
    name: "typescript",
    icon : "/assets/skills/typescript.svg"
  },
  {
    name: "reactjs",
    icon : "/assets/skills/reactjs.svg"
  },
  {
    name: "redux",
    icon : "/assets/skills/redux.svg"
  },
  {
    name: "nextjs",
    icon : "/assets/skills/nextjs.svg"
  },
  {
    name: "tailwindcss",
    icon : "/assets/skills/tailwindcss.svg"
  },
  {
    name: "bootstrap",
    icon : "/assets/skills/bootstrap.svg"
  },
  {
    name: "python",
    icon : "/assets/skills/python.svg"
  },
  {
    name: "django",
    icon : "/assets/skills/django.svg"
  },
  {
    name: "mysql",
    icon : "/assets/skills/mysql.svg"
  },
  {
    name: "prisma",
    icon : "/assets/skills/prisma.svg"
  },
  {
    name: "nodejs",
    icon : "/assets/skills/nodejs.svg"
  }
]
  