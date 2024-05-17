import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    url: string;
}) => {
    return (
        <Link href={props.url} target="blank">
        <Card className="p-2 bg-slate-100 dark:bg-background  flex items-center gap-3 hover:bg-secondary/20 dark:hover:bg-neutral-950 transition-colors group text-foreground">
            <div className="relative">
                <img src={props.image} alt={props.name} className="w-8 h-8 rounded-full object-contain" />
                <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute rounded-full object-contain -bottom-1 -right-1" />
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-3">
                    <p className="text-md font-semibold">{props.name}</p>
                </div>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight className="mr-4 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" size={16} />
        </Card>
        </Link>

    );
};
