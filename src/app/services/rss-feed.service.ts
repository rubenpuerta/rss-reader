import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iif, Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import * as xml2js from 'xml2js';

import { RssResponse } from './../models/response.model';
import { NewsItem, RawNewsItem } from './../models/rss-news.model';

@Injectable({
	providedIn: 'root'
})
export class RssFeedService {
	private readonly url = '/rss/tag/feeds/rss2.xml';

	constructor(private readonly http: HttpClient) {}

	public readFeed(): Observable<RssResponse<NewsItem[]>> {
		return this.http
			.get(this.url, {
				headers: new HttpHeaders()
					.set('Content-Type', 'text/xml')
					.append('Access-Control-Allow-Methods', 'GET')
					.append('Access-Control-Allow-Origin', '*')
					.append(
						'Access-Control-Allow-Headers',
						'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'
					),
				responseType: 'text'
			})
			.pipe(
				map((originalRss) => this.parseXML(originalRss)),
				map(
					(parsedRss): RssResponse<NewsItem[]> =>
						parsedRss.length
							? {
									success: true,
									data: parsedRss
							  }
							: { success: false, error: 'No news found' }
				),
				catchError(
					(): Observable<RssResponse<NewsItem[]>> =>
						of({ success: false, error: 'Error reading news' })
				)
			);
	}

	private parseXML(rssData: string): NewsItem[] {
		let rssItems: NewsItem[] = [];

		if (!rssData) return rssItems;

		const parser = new xml2js.Parser({
			trim: true,
			explicitArray: true
		});
		const parserCallBack = (_err: any, result: any) => {
			const rssDataItems = result?.rss?.channel?.[0]?.item;
			rssItems = rssDataItems.map((item: RawNewsItem) => ({
				author: item?.author?.[0],
				description: item?.description?.[0],
				guid: item?.guid?.[0],
				pubDate: item?.pubDate?.[0],
				title: item?.title?.[0]
			}));
		};
		parser.parseString(rssData, parserCallBack);
		return rssItems;
	}
}