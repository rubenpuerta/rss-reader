import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '@store/reducers';
import { getIsAppLoading } from '@store/selectors';

@Component({
	selector: 'app-container',
	templateUrl: './app-container.component.html',
	styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {
	public isLoading$!: Observable<boolean>;

	constructor(private store$: Store<AppState>) {}

	public ngOnInit(): void {
		this.isLoading$ = this.store$.pipe(select(getIsAppLoading));
	}
}
