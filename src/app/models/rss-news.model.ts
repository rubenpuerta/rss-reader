export interface NewsItem {
	id: string;
	author: string;
	description: string;
	guid: string;
	pubDate: number;
	title: string;
	imageUrl: string;
	articleBrief: string;
}

export interface RawNewsItem {
	author: string[];
	description: string[];
	guid: string[];
	pubDate: string[];
	title: string[];
}
