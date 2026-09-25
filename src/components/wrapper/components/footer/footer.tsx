import CompleteIcon from "@/assets/complete-icon.svg"
import { Link } from "@/components"

function Footer() {
  return (
		<footer className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 p-8 border-t border-t-slate-200 dark:border-t-slate-700">
			<img src={CompleteIcon} className="w-sm" />
			<ul className="w-36">
				<li className="text-lg font-medium">Links Rápidos</li>
				<li><Link href="/">Início</Link></li>
				<li><Link href="/doc">Documentação</Link></li>
				<li><Link href="/calculator">Calculadora</Link></li>
			</ul>
			<ul className="w-36">
				<li className="text-lg font-medium">Referências</li>
				<li><Link href="https://pt.wikipedia.org/wiki/Metabolismo">Metabolismo</Link></li>
				<li><Link href="https://pt.wikipedia.org/wiki/Hipertrofia_muscular">Hipertrófia Muscular</Link></li>
				<li><Link href="https://pt.wikipedia.org/wiki/Metabolismo_basal">Metabolismo Basal</Link></li>
			</ul>
			<ul className="w-36">
				<li className="text-lg font-medium">Referências</li>
				<li><Link href="https://pt.wikipedia.org/wiki/Metabolismo">Metabolismo</Link></li>
				<li><Link href="https://pt.wikipedia.org/wiki/Hipertrofia_muscular">Hipertrófia Muscular</Link></li>
				<li><Link href="https://pt.wikipedia.org/wiki/Metabolismo_basal">Metabolismo Basal</Link></li>
			</ul>
		</footer>
  )
}

export { Footer }