import { SafeHtmlPipe } from '@pipes/sanitize-html.pipe';
import { provide } from '@utils/jest-helpers';

describe('SafeHtmlPipe', () => {
	it('create an instance', () => {
		const pipe = new SafeHtmlPipe(provide({}));
		expect(pipe).toBeTruthy();
	});

	it('should call bypassSecurityTrustHtml from sanitizer', () => {
		const sanitizerMock: { bypassSecurityTrustHtml: jest.Mock<any> } = {
			bypassSecurityTrustHtml: jest.fn()
		};

		const pipe = new SafeHtmlPipe(provide(sanitizerMock));
		pipe.transform('<div></div>');
		expect(sanitizerMock.bypassSecurityTrustHtml).toHaveBeenCalledTimes(1);
	});
});
