import { HeroBase } from "../components";
import { Button } from "@/components/ui/button";

function HeroCTA() {
	return (
		<HeroBase>
			<div className="flex flex-col gap-4 justify-around md:flex-row">
				<div className="flex flex-col gap-2 max-w-124 content-center justify-center">
					<h1 className="font-bold text-4xl">
						Nutrisacional, um lugar para aprender mais sobre você e sua nutrição
					</h1>
					<p>
						Nutrisacional foi criado para conscientizar você sobre como sua nutrição funciona e como você pode cuidar dela para atingir o seu objetivo.
					</p>
					<div className="flex flex-col gap-2">
						<Button>Comece Agora</Button>
						<Button variant="outline">Leia Mais</Button>
					</div>
				</div>
				<div>
					<img src="https://placehold.co/600x800"/>
				</div>
			</div>
		</HeroBase>
	)
}

export { HeroCTA }