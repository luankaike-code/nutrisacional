import { Button } from "@/components/ui/button";
import type { PropsWithChildren } from "react";
import { useNavigate, useLocation } from "react-router";

function Link({href, children}: {href: string} & PropsWithChildren) {
	const location = useLocation()
	const navigate = useNavigate();
	
	return (
		<Button variant="link" onClick={() => navigate(href)} role="link" className={location.pathname == href? "text-rose-500": ""}>
			{children}
		</Button>
	)
}

export { Link }