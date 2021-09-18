import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { httpRssXMLResponse } from '@mocks/http-rss-response-mock';
import { RssFeedService } from '@services/rss-feed.service';

describe('LocationService', () => {
	let rssFeedService: RssFeedService;
	let httpControllerMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [RssFeedService]
		});
		httpControllerMock = TestBed.inject(HttpTestingController);
		rssFeedService = TestBed.inject(RssFeedService);
	});

	it('should return rss info', () => {
		rssFeedService.readFeed().subscribe((res) => {
			expect(res).toMatchInlineSnapshot(`
			Object {
			  "data": Array [
			    Object {
			      "articleBrief": "Article description",
			      "author": "Iván Linares",
			      "description": "<p> <img src=\\"https://i.blogs.es/fa39a9/greaders/1024_2000.jpg\\" alt=\\"Uno de los mejores lectores de noticias regresa: gReader vuelve a actualizarse en Google Play\\"> </p> <p>Article description</p>",
			      "guid": "guid",
			      "imageUrl": "https://i.blogs.es/fa39a9/greaders/1024_2000.jpg",
			      "pubDate": 1612782442000,
			      "title": "Uno de los mejores lectores de noticias regresa: gReader vuelve a actualizarse en Google Play",
			    },
			  ],
			  "success": true,
			}
		`);
		});

		const rssRequest = httpControllerMock.expectOne('/rss/tag/feeds/rss2.xml');
		expect(rssRequest.request.method).toEqual('GET');
		rssRequest.flush(httpRssXMLResponse);
		httpControllerMock.verify();
	});
});
