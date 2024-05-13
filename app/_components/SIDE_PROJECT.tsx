import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Rainbow } from 'lucide-react';
import { CalendarHeart } from 'lucide-react';
import { CookingPot } from 'lucide-react';
import { Code } from 'lucide-react';

export const SIDE_PROJECT: SideProjectProps[] = [
    {
        Logo: CalendarHeart,
        title: "Les Bavardes",
        description: "lorem lezfklez f kjsdj  iozihif c n",
        url: "/",
    },
    {
        Logo: Rainbow,
        title: "Fiertes Amiens",
        description: "lorem lezfklez f kjsdj  iozihif c ze ez",
        url: "/",
    },
    {
        Logo: Code,
        title: "Ada Recap",
        description: "lorem lezfklez f kjsdj  iozihif c nvz",
        url: "/",
    },
    {
        Logo: CookingPot,
        title: "Symrecipe",
        description: "lorem lezfklez f kjsdj  iozihif c nvur ",
        url: "/",
    },
    {
        Logo: CookingPot,
        title: "Symrecipe",
        description: "lorem lezfklez f kjsdj  iozihif c nvur ",
        url: "/",
    },
    {
        Logo: CookingPot,
        title: "Symrecipe",
        description: "lorem lezfklez f kjsdj  iozihif c nvur ",
        url: "/",
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
        <Link href={props.url} className="inline-flex items-center gap-3 hover:bg-accent/50 transition-colors rounded-lg">
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
