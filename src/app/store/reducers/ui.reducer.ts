import { createReducer, on } from '@ngrx/store';

import { UIActions } from '@store/actions';

export interface CommonUIState {
	isLoading: boolean;
}

export const commonUIInitialState: CommonUIState = {
	isLoading: false
};

export const uiReducer = createReducer(
	commonUIInitialState,
	on(UIActions.startLoading, (state) => ({ ...state, isLoading: true })),
	on(UIActions.stopLoading, (state) => ({ ...state, isLoading: false }))
);
