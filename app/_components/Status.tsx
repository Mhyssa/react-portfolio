import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Home } from "lucide-react";


import { SIDE_PROJECT, SideProject } from "./SIDE_PROJECT";
import { WORK, Work } from "./WORK";
import { ContactCard } from "./ContactCard";


export const Status = () => {
    return ( 
    <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full ">
            <Card className="w-full p-4 flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">Side, fun projects.</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECT.map((project, index) => (
                            <SideProject 
                            key={index}
                            Logo={project.Logo}
                            title={project.title}
                            description={project.description}
                            url="/"
                            />
                        ))}

                    </div>
            </Card>
        </div>
        <div className="flex-[2] h-full w-full gap-4 flex flex-col">
            <Card className="w-full p-4 flex flex-col gap-1">
                <p className="text-lg text-muted-foreground">Work</p> 
                <div className="flex flex-col gap-4">
                        {WORK.map((work, index) => (
                            <Work 
                            key={index}
                            {...work}
                            />
                        ))}

                    </div>
            </Card>
            <Card className="p-4 flex-1 flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">Follow me</p>
                <ContactCard 
                name="Marion Hélène Joly" 
                image="https://media.licdn.com/dms/image/D4E03AQEqgIaGGcSvrA/profile-displayphoto-shrink_800_800/0/1715000371222?e=1720656000&v=beta&t=P8k3ut-37ldVKYq-vunjxLge7OivPM9u3_lVwcwcqnU"
                mediumImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUKZsL///8AYsFqk9JFfsoAXsCQrdsAV74AZMH3+fwAXb8AYMAAWb4AW78gbMQSacMqcMUAVb3m7vjI2O6guOCatuDc5vQ6e8nT4PG6zuqvxeaBpdmFpdjz9/x1ntZhkNExdsimv+TD1OxUic5JhM20yOfY4/Ps8vmTsd5/X6OuAAAED0lEQVR4nO2d63aqMBBGGxSJCXgD9SheoNbW93/Cg/WctgpMaGWE0G//htXs5sJkMlk+PQEAAAAAAAAAAAAAAAAAAAAAAAAAAADuRDradV3tyKYbwoN0/af9JoqieO/4bvckpZ+kM/GfxXwUdMxRJaG4ZjVSTTeqRqQXiTwDrzPdKPVrgaAQYVdGqpRvhYLZdFSdUJT+rERQiD9e062rA39VKihEFDTdvPtx9oSgEEv7x6lXPka7MU6dHikoRN/2Tgz+GAxXln/4pTYIiqHla41xkFo/TN2icO2aWDfdyLtQ1MfwQuo23ci7MC401i81v8DwdluY52i3YYV5GNk9D/XcaGj5WmqIu89YHntL1yS49Ztu450Yl5q13QtNhWGa2D1IM7wFKRjaPkizmfhCGk6s78JsJqaE4MD2WfiOVx65razPYbwj3bKpGHZD8JwxfS4UXHcore/Feb/hris9+I77tL4RTLXd8WgOqeTmc8UJY92NI4srpA7UsrfZbPZJEOju+V2QOqOrx/gAAABAo0hHa1cpda6Y6963NouUgtEhPqXr9Toa7F7G9sRLsojbZ7SXDMLtVUS/DU9977FBr+NR5Joi1YWLkjO+MLlw/WQwmheXQQyPL97jdi5OTwzLyZ8A63+PFzb9S95K+sviffWFWfwwR8M5960hnSQffTytJpTfmW38oBQCi6H0zCc+WT/2H1IFwWHoJnQZ0gfRI7qRwdDfVfPLWEjHQsNpWlkwm40TdsXaDT3zsfIVS27Fug2n3xTMPjHMijUb+ul3BcWWOVit11BVX2Q+eZ3aYzie/ECQuxK5VkNVXPRvhLU6sFbDzc8ExYxznNZq+GN2jGF4Owy3jDvGdhhyVl61xPCNbya2xFAc2CKbthiu2L6JbTEUbNdWW2O45xqmrTFkq0XmNFw8r9fHsGJGY8ZV+sFmuNorL1BKBZ7cVQpXx0wTkckwlcFHPYB0vEPZNdUvcE1EFsNZcnOFWFe4FDBnKpnnMAz9/GHA1Kj4zLTUMBiGRVlQ6rrxhQVTsW79hoviNK+zNLy3taYPRyVrInml+gzTwWLthnHZgiFNnVj2r2mZIfHhNhTNc2Vr6jYktrJ6QL/KtIGq25BIR8iEfrVnhSG5zfOLT47tMtxRrTTc57TDkAyf1dF+wzcyLtEn+w1DMtuiC64E2GZIb9QNF+WsMKQvDcuD/YZzMnXdBcMTbUjfBLTCcEAb9mEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCMNuGRpqhBsxlJMeRe7GnCQfp386SY7Il7l+D0U6FPk/+s3H7/pbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPA7+AuM4Fva6iVlRAAAAABJRU5ErkJggg=="
                description="in/marionhelenejoly/"
                url="https://www.linkedin.com/in/marionhelenejoly/"

                />       
                 <ContactCard 
                name="@marionhelenejoly" 
                image="https://media.licdn.com/dms/image/D4E03AQEqgIaGGcSvrA/profile-displayphoto-shrink_800_800/0/1715000371222?e=1720656000&v=beta&t=P8k3ut-37ldVKYq-vunjxLge7OivPM9u3_lVwcwcqnU"
                mediumImage="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
                description="github.com/Mhyssa"
                url="https://github.com/Mhyssa"

                />       
            </Card>
            
        </div>
    </Section>
    );
};



