import { createAction, props, union } from '@ngrx/store';

import { NewsItem } from '@models/rss-news.model';

const initialDataLoad = createAction('[RSS] Initial data load');
const initialDataLoadSuccess = createAction(
	'[RSS] Initial data load success',
	props<{ news: NewsItem[] }>()
);
const initialDataLoadFailure = createAction('[RSS] Initial data load failure');

const actions = { initialDataLoad, initialDataLoadSuccess, initialDataLoadFailure };

const actionsUnions = union(actions);

export type DataLoadctionsType = typeof actionsUnions;
export const DataLoadActions = actions;
