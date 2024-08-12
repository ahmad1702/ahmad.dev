import { cn } from "@/lib/cn";
import formatDate from "@/lib/date";
import { Job } from "@/lib/jobs";
import { toTitleCase } from "@/lib/utils";

type ResumeSectionProps = {
  jobs: Job[];
};

const ResumeSection = ({ jobs }: ResumeSectionProps) => {
  return (
    <section id="resume" className="relative overflow-hidden px-4">
      <div className="bg-gradient-to-r from-transparent via-violet-400 to-transparent h-px" />
      <div className="absolute top-[150px] -z-10 left-3/4 md:left-1/2 w-[500px] h-[300px] md:w-[1052px] md:h-[300px] bg-[radial-gradient(closest-side,#d0a1ff,#f0e0ff,transparent)] dark:bg-[radial-gradient(closest-side,#f5f3ff,#fdfbff,transparent)] -translate-y-[300px] -translate-x-1/2 dark-bg-radial-gradient" />
      <div className="relative pt-16 md:pt-8 lg:pb-12"></div>

      <div className="bg-gradient-to-r from-transparent via-violet-400 to-transparent w-1 h-full absolute left-0 top-0" />

      <div className="container max-w-7xl mx-auto pb-10">
        <div className="space-y-2 pt-0 md:pb-8 md:space-y-5">
          <div className="md:flex items-center justify-between space-x-10">
            <h1 className="font-cal text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Experience
            </h1>
          </div>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A comprehensive snapshot of my career journey, showcasing past jobs
            and the tech I've used.
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {jobs.map((job, i) => {
            const { company, jobTitle, fromDate, toDate, jobNotes, tech } = job;

            const jobKey = `${jobTitle} at ${company}`;
            return (
              <li key={company} className={cn(i !== 0 ? "py-12" : "pb-12")}>
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl className="flex">
                      <dt className="sr-only">
                        Started ${jobTitle} role at ${company} on
                      </dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={fromDate.value.toISOString()}>
                          {formatDate(fromDate.value, {
                            excludeMonth: fromDate.excludeMonth,
                          })}
                        </time>
                      </dd>
                      <span className="mx-1">-</span>
                      <dt className="sr-only">
                        Ended ${jobTitle} role at ${company} on
                      </dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        {typeof toDate.value === "string" ? (
                          toTitleCase(toDate.value)
                        ) : (
                          <time dateTime={toDate.value.toISOString()}>
                            {formatDate(toDate.value, {
                              excludeMonth: toDate.excludeMonth,
                            })}
                          </time>
                        )}
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <div className="flex w-full items-center gap-2">
                            <h2 className="text-3xl md:text-4xl md:mb-3 font-bold leading-8 tracking-tight font-cal text-gray-900 dark:text-gray-100">
                              {company}
                            </h2>
                            <span className="bg-foreground bg-opacity-50 w-0.5 h-8 mb-1 mx-1"></span>
                            <h4 className="text-xl font-light mb-2">
                              {jobTitle}
                            </h4>
                          </div>
                          <ul
                            id="tech-list"
                            className="flex flex-wrap text-muted-foreground dark:text-gray-400"
                          >
                            {tech.map((name) => (
                              <>
                                <li
                                  key={`${jobKey}-${name}`}
                                  className="font-medium underline underline-offset-[2px] cursor-default hover:text-foreground duration-300 underline-fade-in before:bottom-[2.5px]"
                                >
                                  {name}
                                </li>
                                <span className="mx-[3px] font-extralight text-sm">
                                  •
                                </span>
                              </>
                            ))}
                          </ul>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          <ul className="list-disc">
                            {jobNotes.map((note) => (
                              <li key={note}>
                                {note}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ResumeSection;
