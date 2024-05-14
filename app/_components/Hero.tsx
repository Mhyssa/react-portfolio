
import { Section } from "./Section";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { GithubIcon } from "./icons/GithubIcon";

import { Code } from "./Code";
import Link from "next/link";

import Image from 'next/image'

export const Hero = () => {
    return (
       
    <Section className="flex max-md:flex-col items-start gap-4">
        <div className="w-full flex-[3] flex flex-col gap-2">
            <h2 className="font-caption font-bold text-5xl text-accent ">Marion Joly</h2>
            <h3 className="text-3xl font-caption ">Full Stack Developer</h3>
            <p className="text-base">
                I&apos;m a Full Stack Developer passionate about building digital solutions. 
                Let&apos;s connect on             
            <Link href="https://www.linkedin.com/in/marionhelenejoly/" target="blank">
                <Code className="inline-flex items-center"> 
                    <LinkedInIcon size={12} className="inline mr-2"/>LinkedIn
                </Code> 
            </Link> to chat, and check out my projects on 
            <Link href="https://github.com/Mhyssa" target="blank">
                <Code className="inline-flex items-center">
                    <GithubIcon size={12} className="inline mr-2"/>GitHub
                </Code>
            </Link>.
            Based in            
            <Code className="inline-flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Normandie.svg/800px-Flag_of_Normandie.svg.png" 
                style={{width: 16, height:"auto"}} alt="flag of Normandie" className="inline mr-2"/>Normandy
            </Code>, France.
            </p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto">
                <Image
                    src="/avatar_classic.webp" 
                    width={500}
                    height={500}
                    className="w-full h-auto max-w-xs p-3 border-accent border-8 rounded-full max-md:w-56 hover:skew-y-3"
                    alt="marion's profil picture"
                />
        </div>
        
        </Section>
    );
};

