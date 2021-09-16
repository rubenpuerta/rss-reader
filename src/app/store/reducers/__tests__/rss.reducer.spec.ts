import { NewsItem } from '@models/rss-news.model';
import { DataLoadActions } from '@store/actions/data-load.actions';
import { rssInitialState, rssReducer, RssState } from '@store/reducers/rss.reducer';

const mockedNews: NewsItem[] = [
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

describe('rssReducer', () => {
	let initialState: RssState;

	beforeEach(() => {
		initialState = { ...rssInitialState };
	});

	it('should contain initial state', () => {
		const result = rssReducer(undefined, { type: '' } as any);
		expect(result).toMatchSnapshot();
	});
	describe('DataLoadActions.initialDataLoadSuccess', () => {
		it('should set initial load of rss', () => {
			const result = rssReducer(
				initialState,
				DataLoadActions.initialDataLoadSuccess({ news: mockedNews })
			);
			expect(result).toMatchSnapshot();
		});
	});
});
