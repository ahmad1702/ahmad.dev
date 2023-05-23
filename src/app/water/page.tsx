import formatDate from "@/lib/date"
import { myJobsBeLike } from "@/lib/jobs"
import kebabCase from "@/lib/utils"
import { get } from 'lodash-es'
import Link from "next/link"
import { siteConfig } from "../site-config"

const Tag = ({ text }) => {
    return (
        <Link href={`/?tag=${kebabCase(text)}`} className="mr-3 text-sm font-medium uppercase">
            {text.split(' ').join('-')}
        </Link>
    )
}

const MAX_DISPLAY = 5
const WaterPage = ({ searchParams }) => {
    const tagFilter = get(searchParams, 'tag')
    return (
        <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Latest
                </h1>
                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                    {siteConfig.description}
                </p>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {!myJobsBeLike.length && 'No posts found.'}
                {myJobsBeLike.slice(0, MAX_DISPLAY).map((job) => {
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
                                    <dl>
                                        <dt className="sr-only">Published on</dt>
                                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                            <time dateTime={fromDate.toISOString()}>{formatDate(fromDate)}</time>
                                        </dd>
                                    </dl>
                                    <div className="space-y-5 xl:col-span-3">
                                        <div className="space-y-6">
                                            <div>
                                                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                    <Link
                                                        href={`/blog/`}
                                                        className="text-gray-900 dark:text-gray-100"
                                                    >
                                                        {jobTitle} at {company}
                                                    </Link>
                                                </h2>
                                                <div className="flex flex-wrap">
                                                    {techList.map((techName) => (
                                                        <Tag key={`${jobKey}-${techName.name}`} text={techName.name} />
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
        </section>
    )
}

export default WaterPage