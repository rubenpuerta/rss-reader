import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';

import { RssResponse } from '@models/response.model';
import { NewsItem } from '@models/rss-news.model';
import { RssFeedService } from '@services/rss-feed.service';
import { DataLoadActions } from '@store/actions/data-load.actions';

@Injectable()
export class DataLoadEffects {
	public loadRssInfo$ = createEffect(() =>
		this.actions$.pipe(
			ofType(DataLoadActions.initialDataLoad),
			switchMap(() =>
				this.rssService.readFeed().pipe(
					tap(console.log),
					map((response: RssResponse<NewsItem[]>) =>
						response.success
							? DataLoadActions.initialDataLoadSuccess({ news: response.data || [] })
							: DataLoadActions.initialDataLoadFailure()
					)
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private rssService: RssFeedService //		private store$: Store<AppState>
	) {}
}
