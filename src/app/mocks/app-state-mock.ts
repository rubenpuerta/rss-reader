import { NewsItem } from '@models/rss-news.model';

export const mockedNews: NewsItem[] = [
	{
		author: 'test-name',
		description: 'test-html-code',
		guid: 'test-guid',
		pubDate: 12345,
		title: 'test-title',
		imageUrl: 'test-url-path-image',
		articleBrief: 'test-article-brief'
	}
];

export const defaultAppState: any = {
	commonUI: {
		isLoading: false
	},
	rssItems: {
		news: mockedNews
	}
};

export const getMockState = (stateChanges?: Partial<any>): any =>
	({
		...defaultAppState,
		...stateChanges
	} as any);
