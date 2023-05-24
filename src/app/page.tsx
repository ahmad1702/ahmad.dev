import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { siteConfig } from "@/app/site-config";
import { Icons } from "@/components/icons";
import LearnMoreButton from "@/components/learn-more-button";
import TechSection from "@/components/sections/home/tech-section";
import ResumeSection from "@/components/sections/resume/resume-section";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { myJobsBeLike } from "@/lib/jobs";
import Image from "next/image";


const IndexPage = () => {
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
      <TechSection />
    </>
  );
}

export default IndexPage