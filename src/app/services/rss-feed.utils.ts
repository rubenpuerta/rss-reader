export const getFirstImage = (htmlDescriptionDOM: Document) => {
	return htmlDescriptionDOM.querySelector('img')?.src;
};

export const getBriefTitle = (htmlDescriptionDOM: Document) => {
	const [_first, ...paragraphs] = Array.from(htmlDescriptionDOM.querySelectorAll('p'));
	const filledParagraphs = paragraphs.filter((p: HTMLParagraphElement) => p.textContent);
	return filledParagraphs?.[0]?.textContent || '';
};
