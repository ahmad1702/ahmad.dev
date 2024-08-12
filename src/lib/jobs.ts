type TechType = "Frontend" | "Backend" | "Tool";
export type Tech = {
  name: string;
  type: TechType;
};

export type Job = {
  company: string;
  jobTitle: string;
  jobNotes: string[];
  tech: string[];
  fromDate: {
    value: Date;
    excludeMonth?: boolean;
  };
  toDate: {
    value: Date | "present";
    excludeMonth?: boolean;
  };
};

export const myJobsBeLike = [
  {
    company: "Sony Pictures - Crunchyroll",
    jobTitle: "Senior Software Engineer",
    fromDate: { value: new Date(2024, 6) },
    toDate: { value: "present" },
    jobNotes: [
      "Designed, deployed, and managed scalable cloud infrastructure on AWS (ECS, EC2, DynamoDB, Lambda, Step Functions, Kinesis, S3, CloudFront)",
      "Built serverless applications using AWS Lambda, API Gateway, and Step Functions",
      "Developed and maintained large-scale backend systems with Node.js, Python, Java, and Go",
      "Implemented container orchestration using Docker, Kubernetes (EKS), and Amazon Elastic Container Service (ECS)",
      "Utilized NoSQL databases like DynamoDB for high-performance data storage and retrieval",
      "Collaborated on Agile development teams to design, implement, and deploy RESTful APIs with API Gateway",
      "Developed and managed infrastructure as code using Terraform and Pulumi",
      "Implemented monitoring and logging pipelines using Datadog, Amazon CloudWatch, and MUX",
    ],
    tech: [
      "React",
      "React Native",
      "Typescript",
      "Golang",
      "Redux",
      "WASM",
      "Python",
      "Django",
      "Django Rest Framework",
      "SQL",
      "AWS Lambda",
      "AWS S3",
      "DynamoDB",
      "AWS EC2/ECS",
      "AWS Kenesis",
      "Jenkins",
      "Jira",
    ],
  },
  {
    company: "Disney Streaming",
    jobTitle: "Software Engineer",
    fromDate: { value: new Date(2022, 6) },
    toDate: { value: new Date(2024, 0), excludeMonth: true },
    jobNotes: [
      "Collaborated with Data Scientists and Machine Learning Engineers to develop business tools for data analysis and cost evaluations.",
      "Designed and maintained complex web applications using HTML, CSS, and JavaScript, employing front-end frameworks like React and Next.js, and back-end languages such as Python, Golang, or Rust.",
      "pearheaded the development of a cost evaluation service that optimized CDN usage costs using Deep Learning for multiple streaming platforms (Disney+, Hulu, ESPN), leveraging a TypeScript React front-end UI and a Rest API with an in-house design system. Flexed between testing and training the AI model using tools like Pytorch and Ludwig, supporting the backend services, and making a UX friendly dashboard, ensuring scalability and accuracy.",
      "Developed a dynamic price analysis AI service for Disney Parks, collaborating with data engineers, ML teams, and backend engineers to create microservices and architect a scalable TypeScript frontend codebase.",
    ],
    tech: [
      "React",
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "Material UI",
      "HTML",
      "CSS",
      "Javascript",
      "Python",
      "Django",
      "Django Rest Framework",
      "SQL",
      "Snowflake DB",
      "AWS Lambda",
      "AWS S3",
    ],
  },
  {
    company: "PTS Services",
    jobTitle: "Full Stack Engineer",
    fromDate: { value: new Date(2021, 9) },
    toDate: { value: new Date(2022, 6) },
    jobNotes: [
      "Worked on a myriad of projects creating full-stack applications with various stacks that can change from project to project, requiring a knack for learning new languages and frameworks quickly and deeply.",
      "Led the development of the First End-to-End software-based background-checking service in the United States, leveraging microservices with a centralized front end.",
      "Scaled privatized AI Automation and Backend integration services for clients like Uber and Amazon",
      "For every new project, created API documentation and Database design for the backend as well as prototyped UI designs. Having knowledge and expertise on both sides allows for a client-friendly interaction flow with user experience in mind.",
    ],
    tech: [
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
      "Python",
      "Java",
      "Spring Boot",
      "Node.js",
      "Express",
      "Docker",
      "Vercel",
      "AWS S3",
      "Microsoft Azure",
    ],
  },
  {
    company: "Delta Business Solutions",
    jobTitle: "Full Stack Developer",
    fromDate: { value: new Date(2018, 8) },
    toDate: { value: new Date(2021, 9) },
    jobNotes: [
      "Meeting with clients to identify their needs and budget in order to provide an appropriate outline and timeline of the project.",
      "Analyzed and decided on the correct stack for a project, whether need a dedicated backend or database.",
      "For larger data-driven projects, creating full-stack applications using frameworks like Django, React, Angular, or Spring to speed up and bootstrap the development process.",
    ],
    tech: [
      "React",
      "Next.js",
      "Angular",
      "Typescript",
      "HTML",
      "CSS",
      "Javascript",
      "Python",
      "Java",
      "Spring Boot",
      "Django",
      "Flask",
      "PostgreSQL",
      "MySQL",
      "AWS Services",
    ],
  },
] satisfies Job[];
