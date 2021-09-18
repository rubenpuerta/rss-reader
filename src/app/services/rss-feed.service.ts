import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as xml2js from 'xml2js';

import { getBriefTitle, getFirstImage } from '@services/rss-feed.utils';
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
				switchMap((originalRss) =>
					this.parseXML(originalRss).pipe(
						map((parsedRss) => {
							parsedRss.sort((a, b) => a.pubDate - b.pubDate);
							return parsedRss;
						}),
						map(
							(parsedAndOrderedRss): RssResponse<NewsItem[]> =>
								parsedAndOrderedRss.length
									? {
											success: true,
											data: parsedAndOrderedRss
									  }
									: { success: false, error: 'No news found' }
						)
					)
				),
				catchError(
					(): Observable<RssResponse<NewsItem[]>> =>
						of({ success: false, error: 'Error reading news' })
				)
			);
	}

	private parseXML(rssData: string): Observable<NewsItem[]> {
		let rssItems: NewsItem[] = [];

		if (!rssData) return of(rssItems);

		const parser = new xml2js.Parser({
			trim: true,
			explicitArray: true
		});
		const items = from(parser.parseStringPromise(rssData)).pipe(
			map((rssXML) => rssXML?.rss?.channel?.[0]?.item),
			map((rssitems) =>
				rssitems.map((item: RawNewsItem) => {
					const itemDescriptionHTML = item?.description?.[0];
					const parserHTML = new DOMParser();
					const htmlDoc = parserHTML.parseFromString(itemDescriptionHTML, 'text/html');
					return {
						author: item?.author?.[0],
						description: item?.description?.[0],
						guid: item?.guid?.[0],
						pubDate: new Date(item?.pubDate?.[0]).getTime(),
						title: item?.title?.[0],
						imageUrl: getFirstImage(htmlDoc),
						articleBrief: getBriefTitle(htmlDoc)
					};
				})
			)
		);
		return items;
	}
}
