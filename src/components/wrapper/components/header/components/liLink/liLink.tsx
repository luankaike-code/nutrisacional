import { Button } from "@/components/ui/button";
import type { PropsWithChildren } from "react";
import { useNavigate } from "react-router";

function LiLink({href, children}: {href: string} & PropsWithChildren) {
	const navigate = useNavigate();
	return (
		<li>
			<Button variant="link" onClick={() => navigate(href)} role="link" className="text-base">
				{children}
			</Button>
		</li>
	)
}

export { LiLink }