"use client"

import { scrollToID } from "@/lib/utils"
import { ArrowDown } from "lucide-react"
import { Button } from "./ui/button"

const LearnMoreButton = () => {
    return (
        <Button
            onClick={() => scrollToID('resume')}
            size="lg"
        >
            Learn More
            <ArrowDown className="ml-1 h-4 w-4" />
        </Button>
    )
}

export default LearnMoreButton