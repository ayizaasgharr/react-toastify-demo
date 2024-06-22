
const introduction = [
      {
        href: "/introduction",
        link: "Introduction",
        alt: "introduction",
      },
      {
        href: "/installation",
        link: "Installation",
        alt: "installation",
      },
]

const usage = [ 
  {
    href: "/positioning-toastify",
    link: "Positioning toastify",
    alt: "Positioning Toastify",
  },
  {
    href: "/remove-toast",
    link: "Remove Toast Programatically",
    alt: "Remove Toast",
  },
  {
    href: "/duration",
    link: "Handling Duration",
    alt: "handling Duration",
  },
]

const api_reference = [ 
  {
    href: "/toast-container",
    link: "Toast Container",
    alt: "toast container",
  },

]

export const sideBar=[
    {
        link: "Getting Started",
        alt: "introduction",
        href: "/introduction",
        show: true,
        submenu: true,
        subMenuItems:introduction ,

      },
      {
        link: "Usage",
        alt: "introduction",
        href: "/introduction",
        show: true,
        submenu: true,
        subMenuItems: usage ,

      },
      {
        link: "Api Reference",
        alt: "api reference",
        href: "/api_reference",
        show: true,
        submenu: true,
        subMenuItems:api_reference,
      },
]