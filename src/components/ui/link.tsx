import { cn } from '@/lib/cn'
import { default as NextLink } from 'next/link'

type LinkProps = React.ComponentPropsWithRef<typeof NextLink> & {
    disableAnimation?: boolean
}

const Link = ({ className, children, disableAnimation, ...props }: LinkProps) => {
    return (
        <NextLink {...props} className={cn("font-medium underline underline-offset-2 hover:text-foreground duration-300 underline-fade-in", className)}>{children}</NextLink>
    )
}

export default Link