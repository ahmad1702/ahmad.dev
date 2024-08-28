"use client"
import { cn } from '@/lib/cn'
import { Tech, techList } from '@/lib/tech'
import Image from 'next/image'
import { useRef, useState } from 'react'

type Props = {}
type ScrollStatus = 'start' | 'end' | undefined

const TechSection = (props: Props) => {
    const techSectionRef = useRef<HTMLDivElement>(null)
    const [scrollStatus, setScrollStatus] = useState<ScrollStatus>('start')
    const techs: Tech[] = []
    for (const datum of techList) {
        for (const tech of datum.techs) {
            techs.push(tech)
        }
    }
    const handleScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
        let newScrollStatus: ScrollStatus;
        if (e.currentTarget.scrollLeft < 50) {
            newScrollStatus = 'start'
            // uncomment for a 'none' state where both sides are faded
            // } else if (e.currentTarget.scrollLeft >= e.currentTarget.clientWidth - window.innerWidth / 2) {
            //     newScrollStatus = 'end'
        } else {
            newScrollStatus = 'end'
        }
        setScrollStatus(newScrollStatus)
    }

    return (
        <section ref={techSectionRef} id="tech-section" className="h-64 w-full bg-black text-white">
            <div className='h-64 relative md:container -mx-auto md:max-w-7xl pb-1'>
                <div className={cn("absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-black to-transparent z-10 opacity-100 duration-500 pointer-events-none", scrollStatus === 'start' && 'opacity-0')} />
                <div className={cn("absolute top-0 right-0 h-full w-1/4 bg-gradient-to-l from-black to-transparent z-10 opacity-100 duration-500 pointer-events-none", scrollStatus === 'end' && 'opacity-0')} />
                <div className={cn('absolute top-5 left-5 md:left-10 text-2xl font-cal font-bold opacity-0 duration-300', scrollStatus === 'start' && ('opacity-100'))}>Tech I Like</div>
                <div className={cn('absolute top-5 right-5 md:right-10 text-2xl font-cal font-bold opacity-0 duration-300', scrollStatus === 'end' && ('opacity-100'))}>Tech I Like</div>
                <div onScroll={handleScroll} className="h-full px-5 md:px-2 pb-6 pt-12 flex items-center gap-4 overflow-x-auto tech-section-scroll-bar">
                    {techs.map(tech => (
                        <>
                            <div id={tech.imagePath} className="my-card h-[80%] w-[150px] flex-col justify-center items-center gap-2 font-semibold">
                                <Image className="saturate-0 object-contain" src={`/assets/img/techs/${tech.imagePath}`} width={200} height={200} alt="" />
                                {tech.name}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechSection