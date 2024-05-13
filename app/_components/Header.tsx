import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";

import Link from 'next/link';


export const Header = () => {
    return (
     <header className="sticky top-0 py-4 bg-background">
       <Section className="flex items-baseline">
           <h1 className="text-2xl font-bold text-primary ">marionjoly.net</h1>
           <div className="flex-1" />
           <ul className="flex items-center gap-2">
                <Link 
                    href="https://github.com/Mhyssa" target="blank"
                    className={cn(buttonVariants({ variant: "link"}), "size-6 p-0")}
                >
                    <GithubIcon size={16} className="text-foreground"/>
                </Link>
                <Link 
                    href="https://www.linkedin.com/in/marionhelenejoly/" target="blank"
                    className={cn(buttonVariants({ variant: "link"}), "size-6 p-0")}
                >
                    <LinkedInIcon size={16} className="text-foreground"/>
                </Link>
           </ul>
       </Section>
     </header>
    )
}