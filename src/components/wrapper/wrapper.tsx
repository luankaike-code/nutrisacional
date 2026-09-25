import { Outlet } from "react-router"
import { Header, Main, Footer } from "./components"

function Wrapper() {
  return (
    <>
      <Header />

			<Main>
				<Outlet />
			</Main>

			<Footer />
    </>
  )
}

export { Wrapper }