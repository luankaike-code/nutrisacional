import type { PropsWithChildren } from "react";

function Title({children}: PropsWithChildren){
	return (
		<h1 className="font-bold text-4xl">
			{children}
		</h1>
	)
}

export { Title }