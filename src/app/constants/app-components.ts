import { AppContainerComponent } from '@components/app-container';
import { NewsItemComponent } from '@components/news-item';
import { NewsListComponent } from '@components/news-list';
import { NewsListContainerComponent } from '@components/news-list-container';
import { SafeHtmlPipe } from '@pipes/sanitize-html.pipe';

export const APP_COMPONENTS = [
	SafeHtmlPipe,
	AppContainerComponent,
	NewsListContainerComponent,
	NewsListComponent,
	NewsItemComponent
];
