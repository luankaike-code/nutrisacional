import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCallback, type PropsWithChildren } from "react";
import { useNavigate, useLocation } from "react-router";

function Link({href, children}: {href: string} & PropsWithChildren) {
	const location = useLocation()
	const navigate = useNavigate();

	const handleClick = useCallback(() => {
		if (href.startsWith("http")) {
			window.open(href, "_blank");
			return;
		}
		navigate(href);
	}, [href, navigate])
	
	return (
		<Button variant="link" onClick={handleClick} role="link" className={
			cn("hover:text-rose-500", location.pathname === href ? "text-rose-500" : "")
		}>
			{children}
		</Button>
	)
}

export { Link }