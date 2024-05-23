
import { Section } from "./Section";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { GithubIcon } from "./icons/GithubIcon";

import { Code } from "./Code";
import Link from "next/link";

import Image from 'next/image'

export const Hero = () => {
    return (
       
    <Section className="flex max-md:flex-col items-start gap-4">

         <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true" >
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
        </div>

        <div className="w-full flex-[3] flex flex-col gap-2">
            <h2 className="font-caption font-bold text-5xl text-secondary dark:text-accent ">Marion Joly</h2>
            <h3 className="text-3xl font-caption ">Full Stack Developer</h3>
            <p className="text-foreground">
                I&apos;m a Full Stack Developer passionate about building digital solutions. 
                Let&apos;s connect on             
            <Link href="https://www.linkedin.com/in/marionhelenejoly/" target="blank">
                <Code className="inline-flex items-center"> 
                    <LinkedInIcon size={16} className="inline mr-2 pb-1"/>LinkedIn
                </Code> 
            </Link> to chat, and check out my projects on 
            <Link href="https://github.com/Mhyssa" target="blank">
                <Code className="inline-flex items-center">
                    <GithubIcon size={16} className="inline mr-2 pb-1"/>GitHub
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
                <img src="https://github.com/account"/>
        </div>
        
        </Section>
    );
};

