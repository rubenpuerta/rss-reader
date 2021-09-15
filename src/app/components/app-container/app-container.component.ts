import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { NewsItem } from '@models/rss-news.model';
import { AppState } from '@store/reducers';
import { getIsAppLoading, getRssFeed } from '@store/selectors';

@Component({
	selector: 'app-container',
	templateUrl: './app-container.component.html',
	styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {
	public rss$!: Observable<NewsItem[]>;
	public isLoading$!: Observable<boolean>;

	constructor(private store$: Store<AppState>) {}

	public ngOnInit(): void {
		this.rss$ = this.store$.pipe(select(getRssFeed));
		this.isLoading$ = this.store$.pipe(select(getIsAppLoading));
	}
}
