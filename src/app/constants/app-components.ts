import { SafeHtmlPipe } from 'app/pipes/sanitize-html.pipe';

import { AppContainerComponent } from '@components/app-container';
import { NewsItemComponent } from '@components/news-item';
import { NewsListComponent } from '@components/news-list';
import { NewsListContainerComponent } from '@components/news-list-container';

export const APP_COMPONENTS = [
	SafeHtmlPipe,
	AppContainerComponent,
	NewsListContainerComponent,
	NewsListComponent,
	NewsItemComponent
];
