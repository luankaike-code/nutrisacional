import { HeroBase } from "../components";
import { Title } from "@/components/Title/title";
import type { PropsWithChildren } from "react";

function HeroCTA({ src, children }: { src: string } & PropsWithChildren) {
	return (
		<HeroBase>
			<div className="flex flex-col gap-4 justify-around md:flex-row">
				<div className="flex flex-col gap-2 max-w-124 content-center justify-center">
					<Title>
						Nutrisacional, um lugar para aprender mais sobre você e sua nutrição
					</Title>
					<p>
						Nutrisacional foi criado para conscientizar você sobre como sua nutrição funciona e como você pode cuidar dela para atingir o seu objetivo.
					</p>
					<div className="flex flex-col gap-2">
						{children}
					</div>
				</div>
				<div>
					<img src={src}/>
				</div>
			</div>
		</HeroBase>
	)
}

export { HeroCTA }