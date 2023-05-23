type Tech = {
  name: string;
  description?: string;
  imagePath: string;
};
type TechList = {
  title: string;
  techs: Tech[];
};
const techList: TechList[] = [
  {
    title: "Frontend",
    techs: [
      {
        name: "React",
        imagePath: "react.png",
      },
      {
        name: "Next.js",
        imagePath: "next.png",
      },
      {
        name: "Solid",
        imagePath: "solid.png",
      },
      {
        name: "Angular",
        imagePath: "angular.png",
      },
    ],
  },
  {
    title: "Backend",
    techs: [
      {
        name: "Django",
        imagePath: "django.png",
      },
      {
        name: "Spring",
        imagePath: "spring.svg",
      },
      {
        name: "Node.js",
        imagePath: "node.webp",
      },
      {
        name: "FastAPI",
        imagePath: "fastapi.svg",
      },
      {
        name: "Gin",
        imagePath: "gin.png",
      },
    ],
  },
  {
    title: "Languages",
    techs: [
      {
        name: "Typescript",
        imagePath: "typescript.png",
      },
      {
        name: "Golang",
        imagePath: "golang.png",
      },
      {
        name: "Python",
        imagePath: "python.png",
      },
      {
        name: "Rust",
        imagePath: "rust.png",
      },
    ],
  },
];

export { techList, type Tech, type TechList };
