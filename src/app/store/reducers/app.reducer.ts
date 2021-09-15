import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

import { rssReducer, RssState } from '@store/reducers/rss.reducer';
import { CommonUIState, uiReducer } from '@store/reducers/ui.reducer';

export interface AppState {
	rssItems: RssState;
	commonUI: CommonUIState;
}

export const appReducer = new InjectionToken<ActionReducerMap<AppState>>('App reducers token', {
	factory: () => ({
		rssItems: rssReducer,
		commonUI: uiReducer
	})
});
