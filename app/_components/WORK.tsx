import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const WORK: WorkProps[] = [
    {
        image: "https://media.licdn.com/dms/image/D4E0BAQE1cJVC91YxBA/company-logo_100_100/0/1709212696212/ecole_oclock_logo?e=1723680000&v=beta&t=1OOxm4WE2HFKI9LFMUjIduFeE-LI_BvhJxinBiOW6cA",
        title: "FREELANCE",
        role: "CDA Examination Jury",
        date: "2022-2024",
        url: "https://www.linkedin.com/in/marionhelenejoly/",
        freelance: true,
    },
    {
        image: "https://media.licdn.com/dms/image/C4D0BAQGA4MU0tztWDA/company-logo_100_100/0/1631300793068?e=1723680000&v=beta&t=8HAAEXCb6NYEf10CsICDVPDulGsyL0wC4MGbR9GFP-A",
        title: "AFPA",
        role: "Web Dev Trainer",
        date: "2019-2022",
        url: "https://www.linkedin.com/in/marionhelenejoly/",
    },
    {
        image: "https://media.licdn.com/dms/image/C4E0BAQErzXWSFkn9tQ/company-logo_100_100/0/1663664110809/cgi_logo?e=1723680000&v=beta&t=eorCiOSTWdUQd5MmDbn3C7nhDNF66ZhKMay8rL3fklA",
        title: "CGI",
        role: "Programmer Analyst",
        date: "2018",
        url: "https://www.linkedin.com/in/marionhelenejoly/",
    },
];
type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
    freelance?: boolean;
};
export const Work = (props: WorkProps) => {
    return (
        <Link href={props.url} target="blank" className="inline-flex items-center gap-3 p-2 hover:bg-slate-100/80 dark:hover:bg-accent/20 transition-colors rounded-lg">

            <img src={props.image} alt={props.title} className="w-8 h-8 object-contain rounded-md" />

            <div className="mr-auto">
                <div className="flex items-center gap-3">
                    <p className="text-sm font-semibold">{props.title}</p>
                    {props.freelance && <Badge variant="outline" className="dark:bg-accent/20 bg-secondary/50 ">Mission</Badge>}
                </div>
                <p className="text-sm text-muted-foreground">{props.role}</p>
            </div>

            <p className="text-xs text-end text-muted-foreground">{props.date}</p>

        </Link>
    );
};
