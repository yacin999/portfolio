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
  "sm" : {
    scale : 0.9,
    position : [1, -2.25, -1.5]
  },      
  "md" : {
    scale : 0.9,
    position : [1, -2.25, -1.5]
  },   
  "lg" : {
    scale : 0.8,
    position : [1, -2.25, -1.5]
  },   
  "xl" : {
    scale : 0.9,
    position : [1, -2.25, -1.5]
  },    
  "2xl" : {
    scale : 1,
    position : [1, -2.25, -1.5]
  },  
}
  