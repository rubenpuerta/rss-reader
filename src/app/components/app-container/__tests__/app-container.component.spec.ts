import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveComponentModule } from '@ngrx/component';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponent, MockModule } from 'ng-mocks';
import { marbles } from 'rxjs-marbles/marbles';

import { AppContainerComponent } from '@components/app-container';
import { NewsListContainerComponent } from '@components/news-list-container';
import { getMockState } from '@mocks/app-state-mock';
import { AngularMaterialModules } from '@modules/material.module';
import { getIsAppLoading } from '@store/selectors';

describe('AppContainerComponent', () => {
	let component: AppContainerComponent;
	let fixture: ComponentFixture<AppContainerComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [AppContainerComponent, MockComponent(NewsListContainerComponent)],
			imports: [MockModule(AngularMaterialModules), MockModule(ReactiveComponentModule)],
			providers: [
				provideMockStore({
					initialState: getMockState(),
					selectors: [
						{
							selector: getIsAppLoading,
							value: false
						}
					]
				})
			]
		})
			.compileComponents()
			.then(() => {
				fixture = TestBed.createComponent(AppContainerComponent);
				component = fixture.componentInstance;
				fixture.detectChanges();
			});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it(
		'should set streams on init',
		marbles((m) => {
			m.expect(component.isLoading$).toBeObservable(m.cold('a', { a: false }));
			m.flush();
		})
	);

	it('should show news list container', () => {
		const newsContainer = fixture.debugElement.query(By.css('app-news-list-container'));
		expect(newsContainer).toBeTruthy();
	});

	it('should show spinner', () => {
		getIsAppLoading.setResult(true);
		const spinner = fixture.debugElement.query(By.css('mat-spinner'));
		expect(spinner).toBeTruthy();
	});
});
