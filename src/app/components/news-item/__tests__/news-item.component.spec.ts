import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockModule, MockPipe } from 'ng-mocks';

import { NewsItemComponent } from '@components/news-item';
import { AngularMaterialModules } from '@modules/material.module';
import { SafeHtmlPipe } from '@pipes/sanitize-html.pipe';

describe('NewsItemComponent', () => {
	let component: NewsItemComponent;
	let fixture: ComponentFixture<NewsItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NewsItemComponent, MockPipe(SafeHtmlPipe)],
			imports: [MockModule(AngularMaterialModules)]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NewsItemComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should show article brief', () => {
		component.collapsed = true;
		fixture.detectChanges();
		const articleImage = fixture.debugElement.query(By.css('.article__content__image'));
		expect(articleImage).toBeTruthy();
	});
	it('should show full article', () => {
		component.collapsed = false;
		fixture.detectChanges();
		const fullArticle = fixture.debugElement.query(By.css('.article__content--expanded'));
		expect(fullArticle).toBeTruthy();
	});
});
