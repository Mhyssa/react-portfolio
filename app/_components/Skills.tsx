import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";

import { ReactIcon } from "./icons/ReactLogo";
import { TailwindIcon } from "./icons/TailwindLogo";
import { SymfonyIcon } from "./icons/SymfonyLogo";

import { Code } from "./Code";

export const Skills = () => {
    return ( <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Skills</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            I love working on...
        </h2>
        <div className="flex max-md:flex-col gap-4">
              <div className="flex flex-col gap-2 flex-1">
              <ReactIcon size={42} className="animate-spin" style={{animationDuration: "20s"}}/>
              <h3 className="text-2xl font-semibold tracking-tighter">React</h3>
              <p className="text-sm text-muted-foreground">
                This portfolio is built with<Code>React.js</Code>, and I'm currently exploring <Code>Next.js</Code>. 
                I'm already enamored with its philosophy.
              </p>
            </div> 
          

              <div className="flex flex-col gap-2 flex-1">
              <TailwindIcon size={42}/>
              <h3 className="text-2xl font-semibold tracking-tighter">Tailwind</h3>
              <p className="text-sm text-muted-foreground">
                After 2 years of experience with<Code>Bootstrap</Code>, 
                I'm refining my UI skills with<Code>Tailwind CSS</Code>.
              </p>
              </div>
          


              <div className="flex flex-col gap-2 flex-1">
              <SymfonyIcon size={42}/>
              <h3 className="text-2xl font-semibold tracking-tighter">Symfony</h3>
              <p className="text-sm text-muted-foreground">
                I started with<Code>PHP</Code>and<Code>CodeIgniter</Code>, 
                but I've embraced<Code>Symfony</Code>for its full power and capabilities.
            </p>
              </div>
          
          </div>
    </Section> 
    );
};