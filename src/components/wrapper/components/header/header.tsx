import CompleteIcon from "@/assets/complete-icon.svg"
import { useNavigate } from "react-router"
import { LiLink } from "./components";

function Header() {
	const navigate = useNavigate();
  return (
		<>
			<header className="fixed flex w-full h-16 p-4 pr-8 bg-white justify-between">
				<img src={CompleteIcon} className="h-full" onClick={() => navigate("/")}/>
				<ul className="flex">
					<LiLink href="/">Início</LiLink>
					<LiLink href="/doc">Documentação</LiLink>
					<LiLink href="/calculator">Calculadora</LiLink>
				</ul>
			</header>
			<div className="block w-full h-16"></div>
		</>
  )
}

export { Header }