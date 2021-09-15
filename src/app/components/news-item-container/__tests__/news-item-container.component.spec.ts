import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemContainerComponent } from '../news-item-container.component';

describe('NewsItemContainerComponent', () => {
	let component: NewsItemContainerComponent;
	let fixture: ComponentFixture<NewsItemContainerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NewsItemContainerComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NewsItemContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
