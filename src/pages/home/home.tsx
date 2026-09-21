import { useNavigate } from "react-router";
import { HeroCTA } from "./components"
import { Button } from "@/components/ui/button";

function Home() {
	const navigate = useNavigate();
  return (
    <>
      <HeroCTA src={"https://placehold.co/600x800"}>
				<Button onClick={() => navigate("/calculator")}>Use nossa calculadora</Button>
				<Button onClick={() => navigate("/doc")} variant="outline">Leia mais</Button>
			</HeroCTA>
    </>
  )
}

export { Home }
