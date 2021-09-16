export const getFirstImage = (htmlFragment: string) => {
	const startSrc = htmlFragment.indexOf('img src="') + 9;
	const endSrc = htmlFragment.indexOf('"', startSrc + 1);
	return htmlFragment.substring(startSrc, endSrc);
};

export const getBriefTitle = (htmlFragment: string) => {
	let startSrc = htmlFragment.indexOf('<p>', 1);
	let endSrc = htmlFragment.indexOf('</p>', startSrc + 1);
	let diff = endSrc - startSrc;
	while (diff <= 3 && diff > 0) {
		startSrc = htmlFragment.indexOf('<p>', endSrc);
		endSrc = htmlFragment.indexOf('</p>', startSrc + 1);
		diff = endSrc - startSrc;
	}
	const trimmedFirstParagraf = htmlFragment.substring(startSrc + 3, endSrc).trim();
	return trimmedFirstParagraf;
};
