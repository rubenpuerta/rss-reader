import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';

import { NewsItemComponent } from '@components/news-item';
import { NewsListComponent } from '../news-list.component';

describe('NewsListComponent', () => {
	let component: NewsListComponent;
	let fixture: ComponentFixture<NewsListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NewsListComponent, MockComponent(NewsItemComponent)]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NewsListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should create cards with articles', () => {
		const rssItems = component.rssFeed.length;
		const articlesNumber = fixture.debugElement.queryAll(By.css('app-news-item')).length;
		expect(rssItems).toEqual(articlesNumber);
	});
});
