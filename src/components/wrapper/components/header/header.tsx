import CompleteIcon from "@/assets/complete-icon.svg"
import { useNavigate } from "react-router"
import { Link } from "@/components"

function Header() {
	const navigate = useNavigate();
  return (
		<>
			<header className="fixed flex w-full h-16 p-4 pr-8 bg-white justify-between border-b border-t-slate-200 dark:border-t-slate-700s">
				<img src={CompleteIcon} className="h-full" onClick={() => navigate("/")}/>
				<ul className="flex">
					<li><Link href="/">Início</Link></li>
					<li><Link href="/doc">Documentação</Link></li>
					<li><Link href="/calculator">Calculadora</Link></li>
				</ul>
			</header>
			<div className="block w-full h-16"></div>
		</>
  )
}

export { Header }