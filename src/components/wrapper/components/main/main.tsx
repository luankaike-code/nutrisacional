function Main({children} : React.PropsWithChildren) {
  return (
		<main className="flex flex-col">
			{ children }
		</main>
  )
}

export { Main }