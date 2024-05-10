import { Section } from "./Section";
import { Card } from "@/components/ui/card";

export const Status = () => {
    return ( 
    <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full">
            <Card className="w-full p-4 flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">Side, fun projects.</p>
                </Card>
        </div>
        <div className="flex-[2] h-full w-full gap-4 flex flex-col">
            <Card className="p-4 flex-1">Work</Card>
            <Card className="p-4 flex-1">Contact me</Card>
        </div>
    </Section>
    );
};