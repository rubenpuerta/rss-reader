import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { DataLoadActions } from '@store/actions/data-load.actions';
import { AppState } from '@store/reducers';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	constructor(private store$: Store<AppState>) {
		this.store$.dispatch(DataLoadActions.initialDataLoad());
	}
}
