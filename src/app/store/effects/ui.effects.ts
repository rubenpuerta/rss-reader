import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { filter, mapTo, withLatestFrom } from 'rxjs/operators';

import { UIActions } from '@store/actions';
import { DataLoadActions } from '@store/actions/data-load.actions';
import { AppState } from '@store/reducers';
import { getIsAppLoading } from '@store/selectors';

@Injectable()
export class UIEffects {
	public startLoading$ = createEffect(() =>
		this.actions$.pipe(
			ofType(DataLoadActions.initialDataLoad),
			withLatestFrom(this.store$.pipe(select(getIsAppLoading))),
			filter(([_, isLoadding]) => !isLoadding),
			mapTo(UIActions.startLoading())
		)
	);

	public stopLoading$ = createEffect(() =>
		this.actions$.pipe(
			ofType(DataLoadActions.initialDataLoadFailure, DataLoadActions.initialDataLoadSuccess),
			mapTo(UIActions.stopLoading())
		)
	);

	constructor(private actions$: Actions, private store$: Store<AppState>) {}
}
