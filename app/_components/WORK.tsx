import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const WORK: WorkProps[] = [
    {
        image: "https://media.licdn.com/dms/image/C4D0BAQGA4MU0tztWDA/company-logo_100_100/0/1631300793068?e=1723680000&v=beta&t=8HAAEXCb6NYEf10CsICDVPDulGsyL0wC4MGbR9GFP-A",
        title: "AFPA",
        role: "Formatrice en DWWM",
        date: "2019 2022",
        url: "/",
        freelance: true,
    },
    {
        image: "https://media.licdn.com/dms/image/C4E0BAQErzXWSFkn9tQ/company-logo_100_100/0/1663664110809/cgi_logo?e=1723680000&v=beta&t=eorCiOSTWdUQd5MmDbn3C7nhDNF66ZhKMay8rL3fklA",
        title: "Analyste programmeur",
        role: "Assurance test unitaire",
        date: "2018",
        url: "/",
    },
    {
        image: "https://media.licdn.com/dms/image/C4E0BAQErzXWSFkn9tQ/company-logo_100_100/0/1663664110809/cgi_logo?e=1723680000&v=beta&t=eorCiOSTWdUQd5MmDbn3C7nhDNF66ZhKMay8rL3fklA",
        title: "Analyste programmeur",
        role: "Assurance test unitaire",
        date: "2018",
        url: "/",
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
        <Link href={props.url} className="inline-flex items-center gap-3 p-2 hover:bg-accent/50 transition-colors rounded-lg">

            <img src={props.image} alt={props.title} className="w-8 h-8 object-contain rounded-md" />

            <div className="mr-auto">
                <div className="flex items-center gap-3">
                    <p className="text-sm font-semibold">{props.title}</p>
                    {props.freelance && <Badge variant="outline" className="bg-green-900/30">Mission</Badge>}
                </div>
                <p className="text-sm text-muted-foreground">{props.role}</p>
            </div>

            <p className="text-xs text-end text-muted-foreground">{props.date}</p>

        </Link>
    );
};
