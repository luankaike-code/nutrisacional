import CompleteIcon from "@/assets/complete-icon.svg"
import { useNavigate } from "react-router"
import { Link } from "@/components"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

function Header() {
	const navigate = useNavigate();
  return (
		<>
			<header className="fixed flex w-full h-16 p-4 pr-8 bg-white justify-between border-b border-t-slate-200 dark:border-t-slate-700s">
				<img src={CompleteIcon} className="h-full" onClick={() => navigate("/")}/>
				<ul className="hidden md:flex">
					<li><Link href="/">Início</Link></li>
					<li><Link href="/doc">Documentação</Link></li>
					<li><Link href="/calculator">Calculadora</Link></li>
				</ul>

				<DropdownMenu>
					<DropdownMenuTrigger className="md:hidden" render={
						<Button variant="outline"><Menu /></Button>
					} />
					<DropdownMenuContent>
						<DropdownMenuItem><Link href="/">Início</Link></DropdownMenuItem>
						<DropdownMenuItem><Link href="/doc">Documentação</Link></DropdownMenuItem>
						<DropdownMenuItem><Link href="/calculator">Calculadora</Link></DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</header>
			<div className="block w-full h-16"></div>
		</>
  )
}

export { Header }