import { Routes, Route, BrowserRouter } from "react-router"
import { Wrapper } from "./components"
import App from "./App"

function AppRoutes() {
  return (
    <BrowserRouter>
			<Routes>
				<Route element={<Wrapper />}>
					<Route index element={<App />} />
				</Route>
			</Routes>
		</BrowserRouter>
  )
}

export { AppRoutes }