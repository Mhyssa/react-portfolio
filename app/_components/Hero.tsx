import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { GithubIcon } from "./icons/GithubIcon";

import { Code } from "./Code";
import Link from 'next/link';





export const Hero = () => {
    return <Section className="flex max-md:flex-col items-start gap-4">
        <div className="w-full flex-[3] flex flex-col gap-2">
            <h2 className="font-caption font-bold text-5xl text-primary">Marion Joly</h2>
            <h3 className="text-3xl font-caption text-white/50">Full Stack Developer</h3>
            <p className="text-base">I love creating content on 
            <Link href="https://www.linkedin.com/in/marionhelenejoly/" target="blank">
                <Code className="inline-flex items-center"> 
                    <LinkedInIcon size={12} className="inline mr-2"/>LinkedIn
                </Code> 
            </Link>
            , et retrouve tout mes projets sur 
            <Link href="https://github.com/Mhyssa" target="blank">
                <Code className="inline-flex items-center">
                    <GithubIcon size={12} className="inline mr-2"/>GitHub
                </Code>
            </Link>
            . Living in
            <Code className="inline-flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Normandie.svg/800px-Flag_of_Normandie.svg.png" 
                style={{width: 16, height:"auto"}} alt="flag of Normandie" className="inline mr-2"/> Normandy
            </Code>
            .
            </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto">
            <img 
                src="https://media.licdn.com/dms/image/D4E03AQEqgIaGGcSvrA/profile-displayphoto-shrink_800_800/0/1715000371222?e=1720656000&v=beta&t=P8k3ut-37ldVKYq-vunjxLge7OivPM9u3_lVwcwcqnU" 
                className="w-full h-auto max-w-xs rounded-full max-md:w-56 " 
                alt="marion's profil picture" 
            />
        </div>
        
        </Section>
}

