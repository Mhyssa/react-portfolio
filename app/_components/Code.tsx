import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export const Code = ({className,...props}: ComponentPropsWithoutRef<"span">) => {
    return (
        <span className={cn("font-mono border hover:bg-accent/20 bg-slate-800 rounded-md px-1 m-1")}
    {...props} />
    );
};