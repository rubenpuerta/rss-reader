import { mockedNews } from '@mocks/app-state-mock';
import { rssInitialState, RssState } from '@store/reducers/rss.reducer';
import { getRssFeed } from '@store/selectors';

const getRssState = (newValue?: Partial<RssState>) => ({
	rssItems: {
		...rssInitialState,
		...newValue
	}
});

describe('RssSelectors', () => {
	it('should return Rssstate', () => {
		const result = getRssState();
		expect(result).toMatchSnapshot();
	});

	it('should return an empty array', () => {
		const result = getRssFeed(getRssState());
		expect(result).toMatchSnapshot();
	});

	it('should return an array with Rss', () => {
		const store = getRssState({ news: mockedNews });
		const result = getRssFeed(store);
		expect(result).toMatchSnapshot();
	});
});
