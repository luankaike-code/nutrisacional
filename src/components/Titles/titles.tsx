import type { Attributes, HTMLAttributes, PropsWithChildren } from "react";

function Title({children, ...props}: PropsWithChildren & HTMLAttributes<HTMLHeadingElement>){
	return (
		<h1 className="font-bold text-4xl" {...props}>
			{children}
		</h1>
	)
}

function SubTitle({children, ...props}: PropsWithChildren & HTMLAttributes<HTMLHeadingElement>){
	return (
		<h2 className="font-bold text-2xl" {...props}>
			{children}
		</h2>
	)
}

export { Title, SubTitle }