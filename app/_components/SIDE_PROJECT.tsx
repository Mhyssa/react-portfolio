import { Flower, LucideIcon, WorkflowIcon, Youtube } from "lucide-react";

import Link from "next/link";

import { Rainbow } from 'lucide-react';
import { CalendarHeart } from 'lucide-react';
import { CookingPot } from 'lucide-react';
import { Code } from 'lucide-react';

export const SIDE_PROJECT: SideProjectProps[] = [
    {
        Logo: CalendarHeart,
        title: "Les Bavardes",
        description: "Volunteer project developed using CodeIgniter",
        url: "https://lesbavardes.org/",
    },
    {
        Logo: Rainbow,
        title: "Fiertes Amiens",
        description: "Designed for the FlashTrueColor association",
        url: "https://fiertesamiens.fr/",
    },
    {
        Logo: Code,
        title: "Ada Recap",
        description: "Engaged in pedagogical project development for AFPA",
        url: "https://github.com/Mhyssa/AdaRecap",
    },
    {
        Logo: CookingPot,
        title: "Symrecipe",
        description: "Completed a comprehensive Symfony project",
        url: "https://github.com/Mhyssa/SymRecipe",
    },
    {
        Logo: Flower,
        title: "Femmes Citoyennes",
        description: "Implemented a project for the FC collective",
        url: "https://femmes-citoyennes.fr/",
    },
    {
        Logo: Youtube,
        title: "VueTube",
        description: "Developed a YouTube clone utilizing API and Vue.js",
        url:"https://thriving-manatee-41a707.netlify.app/",
    },
];
type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};
export const SideProject = (props: SideProjectProps) => {
    return (
        
        <Link href={props.url} target="blank" className="inline-flex items-center gap-3 hover:bg-accent/20 transition-colors rounded-lg">
            
            <span className="bg-accent text-accent-foreground p-2 m-2 rounded-sm">
                <props.Logo />
            </span>
            <div>
                <p className="text-md font-semibold">{props.title}</p>
                <p className="text-md text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    );
};
