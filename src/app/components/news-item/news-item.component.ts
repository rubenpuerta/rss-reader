import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-news-item',
	templateUrl: './news-item.component.html',
	styleUrls: ['./news-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsItemComponent {
	@Input() public author!: string;
	@Input() public pubDate!: number;
	@Input() public title!: string;
	@Input() public htmlTextContent!: string;
	@Input() public imageUrl!: string;
	@Input() public articleBrief!: string;

	public collapsed = true;

	public toggleState() {
		this.collapsed = !this.collapsed;
	}
}
