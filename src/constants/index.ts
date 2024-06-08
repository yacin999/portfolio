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

// export const mediaScreenSizes = {
//   "mobile" : window.matchMedia("(max-width : 500px)"), 
//   "sm" : window.matchMedia("(max-width : 768px)"),  
//   "md" : window.matchMedia("(max-width : 1024px"),  
//   "lg" : window.matchMedia("(max-width : 1280px)"),  
//   "xl" : window.matchMedia("(max-width : 1536px)"),  
//   "2xl" : window.matchMedia("(min-width : 1537px)"),  
// }

export const computerCanvasPositions : {[key : string] : any} = {
  "mobile" : {
    scale : 0.75,
    position : [1, -2.25, -1.5]
  },   
  "xs" : {
    scale : 1.2,
    position : [3, -1.5, -0.5]
  }, 
  "sm" : {
    scale : 1.3,
    position : [3, -2.25, -0.5]
  },      
  "md" : {
    scale : 1.2,
    position : [1, -2.25, -1.5]
  },   
  "lg" : {
    scale : 1,
    position : [1, -2.25, -1.5]
  },   
  "xl" : {
    scale : 1.1,
    position : [1, -2.25, -2]
  },    
  "2xl" : {
    scale : 1,
    position : [1, -2.25, -1.5]
  },  
}
  