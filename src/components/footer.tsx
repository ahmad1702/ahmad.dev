import { siteConfig } from "@/app/site-config";
import { MailIcon } from "lucide-react";
import NextLink from "next/link";
import Balancer from "react-wrap-balancer";
import { Icons } from "./icons";
import { Button, buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="border-t py-10">
      <div className="container max-w-7xl mx-auto space-y-4">
        <NextLink href="/">
          <Button variant="ghost" className="-ml-4 flex gap-2">
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold text-xl">{siteConfig.name}</span>
          </Button>
        </NextLink>
        <div className="flex items-center gap-2">
          <NextLink
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              size: "sm",
              variant: "secondary",
            })}
          >
            <Icons.linkedIn className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </NextLink>
          <NextLink
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              size: "sm",
              variant: "secondary",
            })}
          >
            <Icons.gitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </NextLink>
        </div>

        <div className="py-4 flex items-center justify-between">
          {/* <Separator /> */}
          <Balancer className="my-3 text-muted-foreground text-xs">
            &copy; 2024 Ahmad Sandid. All rights reserved.
          </Balancer>
          <NextLink
            href="mailto:ahmad1702@gmail.com"
            className="text-xs text-muted-foreground flex items-center gap-2 hover:text-foreground underline underline-offset-2 duration-150"
          >
            <MailIcon className="h-4 w-4" />
            <Separator orientation="vertical" className="h-4" />
            ahmad1702@gmail.com
          </NextLink>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
