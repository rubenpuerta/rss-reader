import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RssState } from '@store/reducers/rss.reducer';

const getRssItemsState = createFeatureSelector<RssState>('rssItems');

export const getRssFeed = createSelector(getRssItemsState, ({ news }) => news);
