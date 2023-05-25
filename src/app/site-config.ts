export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "ahmad.tsx",
  description:
    "Never build your apps with invalid environment variables again. Validate and transform your environment with the full power of Zod.",
  mainNav: [
    // {
    //   title: "Projects",
    //   href: "/projects",
    // },
  ],
  sidebarNav: [
    {
      title: "Experience",
      items: [
        {
          title: "Work Experience",
          href: "/#resume",
          items: [],
        },
        // {
        //   title: "Projects",
        //   href: "/projects",
        //   items: [],
        // },
      ],
    },
    {
      title: "Social Links",
      items: [
        {
          title: "Linkedin",
          href: "https://www.linkedin.com/in/ahmad-sandid-485b59164/",
          items: [],
        },
        {
          title: "Github",
          href: "https://github.com/ahmad1702",
          items: [],
        },
        {
          title: "Email",
          href: "mailto:ahmad1702@gmail.com",
          items: [],
        },
      ],
    },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/ahmad-sandid-485b59164/",
    github: "https://github.com/ahmad1702",
  },
  locale: "en-US",
};
