"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import formatDate from "@/lib/date"
import { Job } from "@/lib/jobs"
import { scrollToID, toTitleCase } from "@/lib/utils"

import { useAutoAnimate } from '@formkit/auto-animate/react'
import Fuse from 'fuse.js'
import { X } from "lucide-react"
import { useMemo, useState } from "react"

type ResumeSectionProps = {
    jobs: Job[]
}

const ResumeSection = ({ jobs }: ResumeSectionProps) => {
    const [searchValue, setSearchValue] = useState('')
    const [listParent] = useAutoAnimate()

    const filteredJobs = useMemo(() => {
        if (searchValue.length === 0) return jobs
        const options: Fuse.IFuseOptions<Job> = {
            includeScore: true,
            threshold: 0.4,
            keys: [
                'company',
                'jobTitle',
                {
                    name: 'tech',
                    getFn: (job) => {
                        const techList: string[] = []

                        for (const techType of Object.keys(job.tech)) {
                            for (const techEntry of job.tech[techType]) {
                                techList.push(techEntry)
                            }
                        }
                        return techList
                    }
                },
                {
                    name: 'jobNotes',
                    getFn: (job) => {
                        const jobNotes = job.jobNotes.map(({ note }) => note).join(' ')
                        console.log(jobNotes)
                        return jobNotes
                    },
                }
            ]
        }

        const fuse = new Fuse<Job>(jobs, options)

        const result = fuse.search(searchValue)
        console.log('result:', result)
        return result.map(({ item }) => item)
    }, [searchValue, jobs])
    return (
        <section id="resume" className="relative overflow-hidden px-4">
            <div className="bg-gradient-to-r from-transparent via-violet-400 to-transparent h-px" />
            <div className="absolute top-[150px] -z-10 left-3/4 md:left-1/2 w-[500px] h-[300px] md:w-[1052px] md:h-[300px] bg-[radial-gradient(closest-side,#d0a1ff,#f0e0ff,transparent)] dark:bg-[radial-gradient(closest-side,#f5f3ff,#fdfbff,transparent)] -translate-y-[300px] -translate-x-1/2 dark-bg-radial-gradient" />
            <div className="relative pt-16 md:pt-8 lg:pb-12"></div>

            <div className="bg-gradient-to-r from-transparent via-violet-400 to-transparent w-1 h-full absolute left-0 top-0" />

            <div className="container max-w-7xl mx-auto">
                <div className="space-y-2 pt-0 pb-8 md:space-y-5">
                    <div className="flex items-center justify-between space-x-10">
                        <h1 className="font-cal text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                            Experience
                        </h1>
                        <div className="w-96 relative">
                            <Input
                                placeholder="Search..."
                                aria-label="search experience"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                className="bg-background md:p-4"
                            />
                            {searchValue.length > 0 && (
                                <Button onClick={() => setSearchValue('')} variant='ghost' size="sm" className="absolute top-1/2 -translate-y-1/2 right-2 text-sm py-1 h-auto outline outline-border">
                                    <X className="h-4 w-4" />
                                    Clear
                                </Button>
                            )}
                        </div>
                    </div>
                    <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                        A comprehensive snapshot of my career journey, showcasing past jobs and the tech I've used.
                    </p>
                </div>
                <ul ref={listParent} className="divide-y divide-gray-200 dark:divide-gray-700">
                    {!filteredJobs.length && <div className="mb-10 font-bold text-xl">No Results Found</div>}
                    {filteredJobs.map((job) => {
                        const { company, jobTitle, fromDate, toDate, jobNotes, tech } = job
                        const techList: { name: string, category: keyof typeof tech }[] = []

                        for (const techType of Object.keys(tech)) {
                            for (const techEntry of tech[techType]) {
                                techList.push({
                                    name: techEntry,
                                    category: techType
                                })
                            }
                        }
                        const jobKey = `${jobTitle} at ${company}`
                        return (
                            <li key={jobKey} className="py-12">
                                <article>
                                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                        <dl className="flex">
                                            <dt className="sr-only">Started ${jobTitle} role at ${company} on</dt>
                                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                                <time dateTime={fromDate.toISOString()}>{formatDate(fromDate)}</time>
                                            </dd>
                                            <span className="mx-1">-</span>
                                            <dt className="sr-only">Ended ${jobTitle} role at ${company} on</dt>
                                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                                {typeof toDate === 'string' ? toTitleCase(toDate) : (
                                                    <time dateTime={toDate.toISOString()}>{formatDate(toDate)}</time>
                                                )}
                                            </dd>
                                        </dl>
                                        <div className="space-y-5 xl:col-span-3">
                                            <div className="space-y-6">
                                                <div>
                                                    <h2 className="text-3xl md:text-4xl md:mb-3 font-bold leading-8 tracking-tight font-cal text-gray-900 dark:text-gray-100">
                                                        {jobTitle} at {company}
                                                    </h2>
                                                    <div className="flex flex-wrap">
                                                        {techList.map(({ name }) => (
                                                            <button
                                                                key={`${jobKey}-${name}`}
                                                                onClick={() => {
                                                                    setSearchValue(name)
                                                                    scrollToID('resume')
                                                                }}
                                                                className="mr-[0.15rem] cursor-pointer text-sm font-medium text-foreground uppercase underline underline-offset-3 hover:bg-input rounded-md px-2 -mx-2 py-1 duration-150"
                                                            >
                                                                {name}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                                    <ul className="list-disc">
                                                        {jobNotes.map(({ note }) => (
                                                            <li key={`${jobKey}-${note.slice(0, 10)}`}>{note}</li>
                                                        ))}
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default ResumeSection