import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";

import { ThemeToggle } from "@/src/theme/ThemeToggle";

import Link from 'next/link';



export const Header = () => {
    return (
     <header className="top-0 py-4">
       <Section className="flex items-baseline">
    
           <h1 className="text-2xl font-bold text-foreground dark:text-accent">marionjoly.net</h1>
           <div className="flex-1" />
           <ul className="flex items-center gap-2">
                <Link 
                    href="https://github.com/Mhyssa" target="blank"
                    className={cn(buttonVariants({ variant: "link"}), "size-9 p-0 hover:bg-secondary dark:hover:bg-neutral-900")}
                    >
                    <GithubIcon size={18} className="text-foreground"/>
                </Link>
                <Link 
                    href="https://www.linkedin.com/in/marionhelenejoly/" target="blank"
                    className={cn(buttonVariants({ variant: "link"}), "size-9 p-0 hover:bg-secondary dark:hover:bg-neutral-900")}
                    >
                    <LinkedInIcon size={18} className="text-foreground"/>
                </Link>
                    <ThemeToggle/>
           </ul>
       </Section>
     </header>
    )
}