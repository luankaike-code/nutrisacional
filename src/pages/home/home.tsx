import { useNavigate } from "react-router";
import { HeroCTA } from "./components"
import { Button } from "@/components/ui/button";
import Mockup from "@/assets/mockup.png"

function Home() {
	const navigate = useNavigate();
  return (
    <>
      <HeroCTA src={Mockup}>
				<Button onClick={() => navigate("/calculator")}>Use nossa calculadora</Button>
				<Button onClick={() => navigate("/doc")} variant="outline">Leia mais</Button>
			</HeroCTA>
    </>
  )
}

export { Home }
