export interface NewsItem {
	author: string;
	description: string;
	guid: string;
	pubDate: string;
	title: string;
}

export interface RawNewsItem {
	author: string[];
	description: string[];
	guid: string[];
	pubDate: string[];
	title: string[];
}
