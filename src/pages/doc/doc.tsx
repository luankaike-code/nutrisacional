import { Title } from "@/components";
import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';

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
				components={{
					h1: Title,
				}}
			>
				{content}
			</ReactMarkdown>
		</div>
	)
}

export { Doc }