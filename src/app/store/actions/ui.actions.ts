import { createAction, union } from '@ngrx/store';

const startLoading = createAction('[UI] Start loading');
const stopLoading = createAction('[UI] Stop loading');

const actions = { startLoading, stopLoading };

const actionsUnions = union(actions);

export type UIActionsType = typeof actionsUnions;
export const UIActions = actions;
