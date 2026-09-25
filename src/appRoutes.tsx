import { Routes, Route, BrowserRouter } from "react-router"
import { Wrapper } from "./components"
import { Doc, Home, Calculator } from "./pages"

function AppRoutes() {
  return (
    <BrowserRouter>
			<Routes>
				<Route element={<Wrapper />}>
					<Route index element={<Home />} />
					<Route path="/doc" element={<Doc />} />
					<Route path="/calculator" element={<Calculator />} />
				</Route>
			</Routes>
		</BrowserRouter>
  )
}

export { AppRoutes }