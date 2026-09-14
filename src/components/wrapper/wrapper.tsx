import { Header, Main, Footer } from "./components"

function Wrapper({children} : React.PropsWithChildren) {
  return (
    <>
      <Header />

			<Main>
				{ children }
			</Main>

			<Footer />
    </>
  )
}

export { Wrapper }