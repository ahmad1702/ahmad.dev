
import Header from "@/components/sections/home/header";
import TechSection from "@/components/sections/home/tech-section";
import ResumeSection from "@/components/sections/resume/resume-section";
import { myJobsBeLike } from "@/lib/jobs";
import { Suspense } from "react";

const IndexPage = () => {
  return (
    <>
      <Header />
      <ResumeSection jobs={myJobsBeLike} />
      <Suspense>
        <TechSection />
      </Suspense>
    </>
  );
}

export default IndexPage