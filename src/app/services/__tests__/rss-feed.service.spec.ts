import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';

import { RssFeedService } from '@services/rss-feed.service';

describe('LocationService', () => {
	let rssFeedService: RssFeedService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [RssFeedService]
		});

		rssFeedService = TestBed.inject(RssFeedService);
		httpMock = TestBed.inject(HttpTestingController);
	});

	// eslint-disable-next-line jest/no-done-callback
	it('should return rss info', (done) => {
		rssFeedService.readFeed().subscribe((res) => {
			expect(res).toEqual(['test']);
			done();
		});

		let rssRequest = httpMock.expectOne('../../mocks/rss-response.mock.xml');

		httpMock.verify();
	});
});
