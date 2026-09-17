import { Routes, Route, BrowserRouter } from "react-router"
import { Wrapper } from "./components"
import { Doc, Home } from "./pages"

function AppRoutes() {
  return (
    <BrowserRouter>
			<Routes>
				<Route element={<Wrapper />}>
					<Route index element={<Home />} />
					<Route path="/doc" element={<Doc />} />
				</Route>
			</Routes>
		</BrowserRouter>
  )
}

export { AppRoutes }