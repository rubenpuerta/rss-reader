import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { NewsItem } from '@models/rss-news.model';
import { AppState } from '@store/reducers';
import { getRssFeed } from '@store/selectors';

@Component({
	selector: 'app-news-list-container',
	templateUrl: './news-list-container.component.html',
	styleUrls: ['./news-list-container.component.scss']
})
export class NewsListContainerComponent implements OnInit {
	public rss$!: Observable<NewsItem[]>;

	constructor(private store$: Store<AppState>) {}

	ngOnInit(): void {
		this.rss$ = this.store$.pipe(select(getRssFeed));
	}
}
