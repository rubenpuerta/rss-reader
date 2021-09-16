import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NewsItem } from '@models/rss-news.model';

@Component({
	selector: 'app-news-list',
	templateUrl: './news-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsListComponent {
	@Input() public rssFeed!: NewsItem[];

	public trackByIndex(index: number): number {
		return index;
	}
}
