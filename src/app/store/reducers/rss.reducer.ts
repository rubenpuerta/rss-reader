import { createReducer, on } from '@ngrx/store';

import { NewsItem } from '@models/rss-news.model';
import { DataLoadActions } from '@store/actions/data-load.actions';

export interface RssState {
	news: NewsItem[];
}

export const rssInitialState: RssState = {
	news: []
};

export const rssReducer = createReducer(
	rssInitialState,
	on(DataLoadActions.initialDataLoadSuccess, (state, { news }) => ({
		...state,
		news
	}))
);
