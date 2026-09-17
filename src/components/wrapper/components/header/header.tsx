import CompleteIcon from "@/assets/complete-icon.svg"

function Header() {
  return (
		<header className="h-12 p-2">
			<img src={CompleteIcon} className="h-full" />
		</header>
  )
}

export { Header }