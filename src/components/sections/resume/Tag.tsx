"use client"
import { scrollToID } from "@/lib/utils"
import { kebabCase } from "lodash-es"
import Link from "next/link"

const Tag = ({ text }) => {
    const handleTagClick = async () => {
        scrollToID('resume')
    }
    return (
        <Link onClick={handleTagClick} href={`/?tag=${kebabCase(text)}`} className="mr-3 text-sm font-medium text-foreground uppercase underline-fade-in">
            {text.split(' ').join('-')}
        </Link>
    )
}

export default Tag