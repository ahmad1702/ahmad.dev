import { siteConfig } from "@/app/site-config"
import { Separator } from "@/components/ui/separator"
import Balancer from "react-wrap-balancer"
import Link from "./ui/link"

const Footer = () => {
    return (
        <footer className="border-t py-10">
            <div className="md:flex w-4/5 mx-auto gap-4">
                <div>
                    <h3 className="text-l sm:font-bold text-muted-foreground">
                        Pages
                    </h3>
                    <ul className="py-4 sm:text-s pt-4 text-gray-400">
                        {siteConfig.mainNav.map((page) => (
                            <li key={page.href} className="pb-1">
                                {page.href !== undefined ? (
                                    <Link href={page.href}>
                                        {page.title}
                                    </Link>
                                ) : page.title}
                            </li>
                        ))}

                        <li className="pb-1">
                            <Link href="/privacy-policy">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-l sm:font-bold text-muted-foreground">
                        Credits
                    </h3>
                    <ul className="py-4 sm:text-s pt-4 text-gray-400">
                        <p className="pb-1">
                            Built by{" "}
                            <Link
                                href={'https://www.github.com/ahmad1702'}
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium underline underline-offset-2 hover:text-foreground underline-fade-in"
                            >
                                Ahmad Sandid
                            </Link>
                            .
                        </p>
                        <p className="pb-1">
                            The source code is available on{" "}
                            <Link
                                href={siteConfig.links.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </Link>
                            .
                        </p>
                        <p className="pb-1">
                            Hosted on{" "}
                            <Link
                                href="https://vercel.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Vercel
                            </Link>
                            .
                        </p>
                        <p className="pb-1">
                            Using the{" "}
                            <Link
                                href="https://create.t3.gg/"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium underline underline-offset-4"
                            >
                                T3 Stack
                            </Link>
                            .
                        </p>
                    </ul>
                </div>
            </div>
            <div className="mx-auto w-[calc(80%_+_10px)] mt-5">
                <Separator />
                <Balancer className="my-3 text-gray-400">
                    &copy; 2023 Croisswapp. All rights reserved.
                </Balancer>
            </div>
        </footer>
    )
}
export default Footer