import { Card } from "@/components/ui/card"
import { ContactCard } from "./ContactCard"
import { Section } from "./Section"
import { Badge } from "@/components/ui/badge";

export const Contact = () => {
    return (
                <Section className="flex flex-col items-start gap-4">
                    <Badge variant={"outline"} >Contact</Badge>
                    <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">I will be happy to work with you.</h2>

                    <div className="w-full flex-1 flex flex-col gap-2">
 
                        <ContactCard 
                        name="jolym8@gmail.com" 
                        image="https://media.licdn.com/dms/image/D4E03AQEqgIaGGcSvrA/profile-displayphoto-shrink_800_800/0/1715000371222?e=1720656000&v=beta&t=P8k3ut-37ldVKYq-vunjxLge7OivPM9u3_lVwcwcqnU"
                        mediumImage="data:image/png;base64,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"
                        description="Email me for any inquiries."
                        url="mailto:jolym8@gmail.com"
                        />       

                    </div>
            </Section>
    )
}