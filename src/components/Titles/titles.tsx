import type { PropsWithChildren } from "react";

function Title({children}: PropsWithChildren){
	return (
		<h1 className="font-bold text-4xl">
			{children}
		</h1>
	)
}

function SubTitle({children}: PropsWithChildren){
	return (
		<h2 className="font-bold text-2xl">
			{children}
		</h2>
	)
}

export { Title, SubTitle }