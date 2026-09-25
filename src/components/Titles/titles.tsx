import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

function Title({children, className, ...props}: PropsWithChildren & HTMLAttributes<HTMLHeadingElement>){
	return (
		<h1 className={cn("font-bold text-4xl", className)} {...props}>
			{children}
		</h1>
	)
}

function SubTitle({children, className, ...props}: PropsWithChildren & HTMLAttributes<HTMLHeadingElement>){
	return (
		<h2 className={cn("font-bold text-2xl", className)} {...props}>
			{children}
		</h2>
	)
}

export { Title, SubTitle }