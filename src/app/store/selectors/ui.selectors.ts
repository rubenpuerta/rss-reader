import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CommonUIState } from '@store/reducers';

const getCommonUIState = createFeatureSelector<CommonUIState>('commonUI');

export const getIsAppLoading = createSelector(getCommonUIState, (uiState) => uiState?.isLoading);
