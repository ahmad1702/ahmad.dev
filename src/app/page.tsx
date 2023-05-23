import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { siteConfig } from "@/app/site-config";
import { Icons } from "@/components/icons";
import LearnMoreButton from "@/components/learn-more-button";
import ResumeSection from "@/components/sections/resume/resume-section";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { myJobsBeLike } from "@/lib/jobs";
import { Tech, techList } from "@/lib/tech";
import Image from "next/image";

const TitleHeader = ({ className }: { className?: string }) => {
  return (
    <div
      className="w-full max-w-5xl"
    >
      <h1
        className="font-cal animate-fade-up bg-foreground dark:bg-white dark-gradient-to-tr from-indigo-400 to-fuchsia-500 bg-clip-text text-center text-5xl/[3rem] font-bold text-transparent opacity-0 drop-shadow-sm lg:text-5xl/[5rem]"
        style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
      >
        <Balancer className="">
          <br />
          sleak and responsive designs{" "}
          <div className="w-36 h-[3px] bg-black rounded-md mx-auto mt-5"></div>
          <span className="underline decoration-destructive decoration-wavy decoration-from-font underline-offset-4">
            robust
          </span>{" "}
          and efficient code
        </Balancer>
      </h1>
    </div>
  )
}

const IndexPage = () => {
  const techs: Tech[] = []
  for (const datum of techList) {
    for (const tech of datum.techs) {
      techs.push(tech)
    }
  }
  return (
    <>
      <div className="relative" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700" />
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
        </div>
        <Container>
          <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl font-cal">
                Shaping a world with{" "}
                <span className="text-primary dark:text-white">reimagination.</span>
              </h1>
              <p className="mt-8 text-gray-700 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                nam itaque sed eius modi error totam sit illum. Voluptas doloribus
                asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
              </p>
              <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                <button
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max text-black"
                >
                  Get started
                </button>
                <a
                  href="#"
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-primary dark:text-white">
                    Learn more
                  </span>
                </a>
              </div>
              <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The lowest price
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The fastest on the market
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The most loved
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img
                  src="./images/clients/microsoft.svg"
                  className="h-12 w-auto mx-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img
                  src="./images/clients/airbnb.svg"
                  className="h-12 w-auto mx-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
              <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                <img
                  src="./images/clients/google.svg"
                  className="h-9 w-auto m-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img
                  src="./images/clients/ge.svg"
                  className="h-12 w-auto mx-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
              <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                <img
                  src="./images/clients/netflix.svg"
                  className="h-8 w-auto m-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img
                  src="./images/clients/google-cloud.svg"
                  className="h-12 w-auto mx-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <section className="relative container flex flex-col justify-center overflow-hidden items-center min-h-[calc(100vh-4rem)] gap-6 pb-8 pt-6 lg:py-10">
        <Image src={"/assets/img/ahmad_profile_transparent.png"} height={500} width={500} className="h-[250px] w-[250px] lg:h-[300px] lg:w-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full max-w-5xl z-[11]" alt={""} />
        <div className="h-[250px] w-[250px] lg:h-[300px] lg:w-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full max-w-5xl z-[12] border-muted-foreground border-[8px]" />
        <div className="h-[250px] w-[250px] lg:h-[300px] lg:w-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full max-w-5xl z-[10] backdrop-invert backdrop-hue-rotate-180 dark:hidden" />
        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full max-w-5xl z-[9]" >
          <TitleHeader />
        </div>
        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full max-w-5xl z-[8]" >
          <TitleHeader />
        </div>
        <Image src={"/assets/img/ahmad_profile.jpeg"} height={500} width={500} className="h-[250px] w-[250px] lg:h-[300px] lg:w-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full max-w-5xl z-[5] invert hue-rotate-180 dark:invert-0 dark:hue-rotate-0" alt={""} />
        <div className="h-full w-full absolute top-0 left-0 z-[15] flex flex-col items-center justify-between p-10">
          <p
            className="animate-fade-up text-center opacity-0 lg:text-xl"
            style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
          >
            <Balancer className="font-bold text-xl">From sleek and responsive designs to robust and efficient code, let's work together to create products that stands out in the digital world.</Balancer>
          </p>
          <div
            className="flex justify-center gap-4 animate-fade-up opacity-0"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <LearnMoreButton />
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <Icons.gitHub className="mr-1 h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <ResumeSection jobs={myJobsBeLike} />
      <section id="tech-section" className="h-64 w-full bg-muted text-muted-foreground p-4 overflow-x-auto">
        <div className="w-full h-full px-10 py-5 flex items-center gap-4">
          {techs.map(tech => (
            <div className="my-card h-[80%] w-[150px] flex flex-col justify-center items-center gap-2 font-semibold">
              <Image className="saturate-0 object-contain" src={`/assets/img/techs/${tech.imagePath}`} width={200} height={200} alt="" />
              {tech.name}
            </div>
          ))}
        </div>
      </section>
      {/* <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto">
          <div className="bg-gradient-to-r from-transparent via-violet-400 to-transparent h-px" />
          <div className="absolute top-[150px] left-1/2 w-[1052px] h-[300px] bg-[radial-gradient(closest-side,#d0a1ff,#f0e0ff,transparent)] dark:bg-[radial-gradient(closest-side,#f5f3ff,#fdfbff,transparent)] -translate-y-[300px] -translate-x-1/2 dark-bg-radial-gradient" />
          <div className="relative pt-12 lg:pt-24 lg:pb-12">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold lg:text-3xl text-gray-800 dark:text-gray-200">
                Tailwind CSS{" "}
                <span className="bg-gradient-to-t from-violet-400 to-fuchsia-400 text-transparent bg-clip-text">
                  <span>Components</span>
                </span>
              </h2>
              <p className="text-gray-500 mt-2 dark:text-gray-400">
                Based on the Tailwind CSS utility classes, Preline UI's prebuilt
                components and UI elements help you quickly design and customize
                responsive mobile-first websites.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default IndexPage