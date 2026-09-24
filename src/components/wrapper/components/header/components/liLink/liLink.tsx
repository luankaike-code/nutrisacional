import { Link } from "@/components/link/link";
import type { PropsWithChildren } from "react";

function LiLink({href, children}: {href: string} & PropsWithChildren) {	
	return (
		<li>
			<Link href={href}>{children}</Link>
		</li>
	)
}

export { LiLink }