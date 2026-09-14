function Main({children} : React.PropsWithChildren) {
  return (
		<main className="bg-yellow-500">
			{ children }
		</main>
  )
}

export { Main }