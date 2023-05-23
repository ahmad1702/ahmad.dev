type TechType = "Frontend" | "Backend" | "Tool";
export type Tech = {
  name: string;
  type: TechType;
};
export type JobNote = {
  note: string;
};
export type Job = {
  company: string;
  jobTitle: string;
  jobNotes: JobNote[];
  tech: Record<string, string[]>;
  fromDate: Date;
  toDate: Date | "present";
};

export const myJobsBeLike: Job[] = [
  {
    company: "Disney Streaming",
    jobTitle: "Full Stack Engineer",
    fromDate: new Date(2022, 6),
    toDate: "present",
    jobNotes: [
      {
        note: "Worked with Data Engineers and Data Scientists to implement business tools for data analysis and cost evaluations.",
      },
      {
        note: "Discussing requirements with clients, proposing solutions, ensuring a pleasant user experience, maintaining databases, and performing quality assurance.",
      },
      {
        note: "Integrating Machine Learning Algorithms to be accessible and run within a Django Rest API that a user interacts with on a React Frontend, all while keeping data flow accurate and secure.",
      },
      {
        note: "Designing both the Database structure on the backend as well as the UI/UX of the frontend.",
      },
    ],
    tech: {
      Frontend: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Material UI",
        "HTML",
        "CSS",
        "Javascript",
      ],
      Backend: ["Python", "Django", "Django Rest Framework", "SQL"],
      Tools: ["Snowflake DB", "AWS Lambda", "AWS S3"],
    },
  },
  {
    company: "PTS Services",
    jobTitle: "Full Stack Web Developer",
    fromDate: new Date(2021, 9),
    toDate: new Date(2022, 6),
    jobNotes: [
      {
        note: "Worked on a myriad of projects creating full-stack applications with various stacks that can change from project to project, requiring a knack for learning new languages and frameworks quickly and deeply.",
      },
      {
        note: "For every new project, created API documentation and Database design for the backend as well as prototyped UI designs. Having knowledge and expertise on both sides allows for a client-friendly interaction flow with user experience in mind.",
      },
    ],
    tech: {
      Frontend: [
        "React",
        "Next.js",
        "Angular",
        "Typescript",
        "PHP",
        "JQuery",
        "TailwindCSS",
        "Material UI",
        "HTML",
        "CSS",
        "Javascript",
      ],
      Backend: ["Python", "Java", "Spring Boot", "Node.js", "Express"],
      Tools: ["Docker", "Vercel", "AWS S3", "Microsoft Azure"],
    },
  },
  {
    company: "Delta Business Solutions",
    jobTitle: "Full Stack Web Developer",
    fromDate: new Date(2018, 4),
    toDate: new Date(2021, 9),
    jobNotes: [
      {
        note: "Meeting with clients to identify their needs and budget in order to provide an appropriate outline and timeline of the project.",
      },
      {
        note: "Analyzed and decided on the correct stack for a project, whether need a dedicated backend or database.",
      },
      {
        note: "For larger data-driven projects, creating full-stack applications using frameworks like Django, React, Angular, or Spring to speed up and bootstrap the development process.",
      },
    ],
    tech: {
      Frontend: [
        "React",
        "Next.js",
        "Angular",
        "Typescript",
        "HTML",
        "CSS",
        "Javascript",
      ],
      Backend: ["Python", "Java", "Spring Boot", "Django", "Flask"],
      Tools: ["PostgreSQL", "MySQL", "AWS Services"],
    },
  },
];
