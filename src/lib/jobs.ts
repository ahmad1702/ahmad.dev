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
    fromDate: { value: new Date(2024, 0), excludeMonth: true },
    toDate: { value: "present" },
    jobNotes: [
      "Architect and implement high-performance backend systems for video playback, optimizing streaming quality and reliability",
      "Implement adaptive bitrate streaming protocols (e.g., MPEG-DASH, HLS) to ensure smooth playback across devices",
      "Develop robust error handling and recovery mechanisms to maintain uninterrupted video delivery",
      "Optimize video encoding and transcoding pipelines to support multiple formats and resolutions",
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
      "Rust",
      "React Native",
      "React",
      "Typescript",
      "Golang",
      "Redux",
      "WASM",
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
      "Designed and maintained complex web applications using HTML, CSS, and JavaScript, employing front-end frameworks like React and Next.js, and back-end languages such as Python, Golang, or Rust.",
      "Coordinated with designers, developers, and stakeholders to plan and execute global projects, ensuring adherence to development timelines and project requirements.",
      "Developed a cutting-edge cost evaluation service utilizing Deep Learning to optimize CDN expenses for streaming platforms (Disney+, Hulu, ESPN), integrating TypeScript React front-end UI, Rest API, and in-house design system. Orchestrated testing and supported backend services to deliver a scalable and accurate solution. Created a user-friendly dashboard interface for seamless user experience.",
      "Developed a dynamic price analysis AI service for Disney Parks, collaborating with data engineers, ML teams, and backend engineers to create microservices and architect a scalable TypeScript frontend codebase.      ",
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
    company: "Vetzu AI",
    jobTitle: "Full Stack Engineer",
    fromDate: { value: new Date(2021, 9) },
    toDate: { value: new Date(2022, 6) },
    jobNotes: [
      "Developed full-stack applications using diverse technology stacks, adapting quickly to new languages and frameworks.",
      "Led the development of the first End-to-End software-based background-checking service in the United States, leveraging microservices with a centralized front end.",
      "Scaled privatized AI Automation and Backend integration services for clients like Uber and Amazon",
      "Leveraged an in-house algorithm for real-time image validation with Live Video, improving the accuracy of the user verification process",
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
      "Developed front-end applications using React, Next.js, Angular, SolidJS, and Sveltekit.",
      "Created back-end systems using Express/Node.js, Oatpp/ C++, Actix/Rust/SQLX, Fiber/Golang or Java Spring Boot depending on the project.",
      "Designed and implemented RESTful APIs to support client applications.",
      "Created Monorepo templates for different development stacks that can be re-used for many projects in order to get started quick on client projects. Supported multiple separate backends with full end to end type safety via GraphQL or Protocal Buffers.",
      "Actively participated in Agile development methodologies, including sprint planning, daily stand-ups, and retrospectives.",
      "Developed a customized enterprise resource planning (ERP) system for a client team, optimizing internal processes and increasing operational efficiency across departments.      ",
    ],
    tech: [
      "Typescript",
      "Java",
      "C++",
      "Python",
      "Golang",
      "React",
      "Next.js",
      "Angular",
      "Typescript",
      "Oatpp",
      "Fiber",
      "Spring Boot",
      "Django",
      "Flask",
      "PostgreSQL",
      "MySQL",
      "AWS Services",
    ],
  },
] satisfies Job[];
