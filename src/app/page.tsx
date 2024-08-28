import Header from "@/components/sections/home/header";
import ResumeSection from "@/components/sections/resume/resume-section";
import { myJobsBeLike } from "@/lib/jobs";

const IndexPage = () => {
  return (
    <>
      <Header />
      <ResumeSection jobs={myJobsBeLike} />
    </>
  );
};

export default IndexPage;
