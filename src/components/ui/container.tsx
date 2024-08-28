import { cn } from '@/lib/cn';
import { ReactNode } from 'react';

type Props = {
    className?: string;
    children?: ReactNode;
}

const Container = ({ className, children }: Props) => {
    return (
        <div className={cn("max-w-7xl mx-auto px-6 md:px-12 xl:px-6", className)}>
            {children}
        </div>
    )
}

export default Container