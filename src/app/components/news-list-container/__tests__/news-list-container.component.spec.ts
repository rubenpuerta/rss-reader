import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveComponentModule } from '@ngrx/component';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponent, MockModule } from 'ng-mocks';
import { marbles } from 'rxjs-marbles/marbles';

import { NewsListComponent } from '@components/news-list';
import { NewsListContainerComponent } from '@components/news-list-container';
import { getMockState } from '@mocks/app-state-mock';
import { getRssFeed } from '@store/selectors';

describe('NewsListContainerComponent', () => {
	let component: NewsListContainerComponent;
	let fixture: ComponentFixture<NewsListContainerComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [NewsListContainerComponent, MockComponent(NewsListComponent)],
			imports: [MockModule(ReactiveComponentModule)],
			providers: [
				provideMockStore({
					initialState: getMockState(),
					selectors: [
						{
							selector: getRssFeed,
							value: ['test']
						}
					]
				})
			]
		})
			.compileComponents()
			.then(() => {
				fixture = TestBed.createComponent(NewsListContainerComponent);
				component = fixture.componentInstance;
				fixture.detectChanges();
			});
	});

	/* 	beforeEach(() => {
		fixture = TestBed.createComponent(NewsListContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}); */

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it(
		'should set streams on init',
		marbles((m) => {
			m.expect(component.rss$).toBeObservable(m.cold('a', { a: ['test'] as any }));
		})
	);
});
