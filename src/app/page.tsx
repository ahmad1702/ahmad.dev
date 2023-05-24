import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { siteConfig } from "@/app/site-config";
import { Icons } from "@/components/icons";
import LearnMoreButton from "@/components/learn-more-button";
import ResumeSection from "@/components/sections/resume/resume-section";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { cn } from "@/lib/cn";
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
      <section className="relative h-[calc(100vh-4rem)]" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700" />
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
        </div>
        <Container className="h-[calc(100vh-4rem)] z-[5] w-full relative">
          <div className="lg:w-2/3 h-full text-center mx-auto flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <Image src={"/assets/img/ahmad_profile.jpeg"} height={250} width={250} className="object-contain mask mask-squircle" alt={""} />
              <div className="flex-1 ">
                <Balancer className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl font-cal">
                  Shaping a world with{" "}
                  <span className="bg-gradient-to-tl from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent pb-1">reimagination.</span>
                </Balancer>
                <p className="mt-8 text-gray-700 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
                  nam itaque sed eius modi error totam sit illum. Voluptas doloribus
                  asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
                </p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <LearnMoreButton />
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.github}
                className={cn(buttonVariants({ variant: "outline", size: "lg", className: 'w-full md:w-auto bg-background' }), 'rounded-full')}
              >
                <Icons.gitHub className="mr-1 h-4 w-4" />
                GitHub
              </Link>
            </div>
          </div>
        </Container>
      </section >
      <ResumeSection jobs={myJobsBeLike} />
      <section id="tech-section" className="relative h-64 w-full bg-muted to-muted px-4">
        <div className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-muted to-transparent z-10" />
        <div className="absolute top-0 right-0 h-full w-1/4 bg-gradient-to-l from-muted to-transparent z-10" />
        <div className="h-full px-10 py-6 flex items-center gap-4 overflow-x-auto">
          {techs.map(tech => (
            <div className="my-card h-[80%] w-[150px] flex flex-col justify-center items-center gap-2 font-semibold">
              <Image className="saturate-0 object-contain" src={`/assets/img/techs/${tech.imagePath}`} width={200} height={200} alt="" />
              {tech.name}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default IndexPage