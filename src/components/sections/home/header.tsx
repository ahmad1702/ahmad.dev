import { siteConfig } from '@/app/site-config'
import { Icons } from '@/components/icons'
import LearnMoreButton from '@/components/learn-more-button'
import { buttonVariants } from '@/components/ui/button'
import Container from '@/components/ui/container'
import { cn } from '@/lib/cn'
import Image from 'next/image'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import RotatingText from './rotating-text'

const Header = () => {
    return (
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
                        <Image src={"/assets/img/ahmad_profile.jpeg"} height={250} width={250} className="object-contain mask mask-squircle h-[175px] w-[175px] md:h-[250px] md:w-[250px]" alt={""} />
                        <div className="flex-1 ">
                            <Balancer className="text-gray-600 dark:text-white font-cal text-xl text-center mt-5 md:mt-0 w-full ">
                                Ahmad Sandid
                            </Balancer>
                            <RotatingText />
                            <p className="mt-4 md:text-2xl text-gray-700 dark:text-gray-300">
                                From sleek and responsive designs to robust and efficient code, let's work together to create a website that stands out in the digital world.
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
    )
}

export default Header