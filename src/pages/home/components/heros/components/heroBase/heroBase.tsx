function HeroBase({children} : React.PropsWithChildren) {
	return (
		<section className="p-4">
			{ children }
		</section>
	)
}

export { HeroBase }