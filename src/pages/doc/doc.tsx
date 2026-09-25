import { Title, SubTitle } from "@/components";
import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import remarkDirective from "remark-directive";
import { CalloutBlock, remarkCallouts } from "./components";
import CompleteIcon from "@/assets/complete-icon-doc.svg"

function Doc() {
	const [content, setContent] = useState('');

	useEffect(() => {
		fetch('/doc.md')
		.then((res) => res.text())
		.then((text) => setContent(text));
	}, []);

	return (
		<div className="p-8">
			<div className="h-32 mb-24 flex flex-col justify-center">
				<img className="h-full" src={CompleteIcon} />
			</div>
			<ReactMarkdown
				remarkPlugins={[remarkDirective, remarkCallouts]}
				components={{
					h1: (props) => <Title className="mt-4" {...props} />,
					h2: (props) => <SubTitle className="mt-2" {...props} />,
					callout: ({ variant, children }) => <CalloutBlock variant={variant}>{children}</CalloutBlock>,
				}}
			>
				{content}
			</ReactMarkdown>
		</div>
	)
}

export { Doc }