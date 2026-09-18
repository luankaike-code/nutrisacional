import { Title } from "@/components";
import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import remarkDirective from "remark-directive";
import { CalloutBlock, remarkCallouts } from "./components";

function Doc() {
	const [content, setContent] = useState('');

	useEffect(() => {
		fetch('/doc.md')
		.then((res) => res.text())
		.then((text) => setContent(text));
	}, []);

	return (
		<div style={{ padding: '20px' }}>
			<ReactMarkdown
				remarkPlugins={[remarkDirective, remarkCallouts]}
				components={{
					h1: Title,
					callout: ({ node, variant, children }) => <CalloutBlock variant={variant}>{children}</CalloutBlock>
				}}
			>
				{content}
			</ReactMarkdown>
		</div>
	)
}

export { Doc }