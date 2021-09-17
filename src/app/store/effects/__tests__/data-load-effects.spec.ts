import { of } from 'rxjs';
import { marbles } from 'rxjs-marbles/jest';

import { mockedNews } from '@mocks/app-state-mock';
import { DataLoadActions } from '@store/actions/data-load.actions';
import { DataLoadEffects } from '@store/effects';
import { provide } from '@utils/jest-helpers';
import { ActionMocks } from '@utils/jest-mocks';

describe('DataLoadEffects', () => {
	let effects: DataLoadEffects;
	let actions$: ActionMocks<any>;
	let rssService = { readFeed: jest.fn(() => of({ success: true, data: mockedNews })) };

	beforeEach(() => {
		actions$ = new ActionMocks<any>();
		effects = new DataLoadEffects(provide(actions$), provide(rssService));
	});

	it(
		'should call DataLoadActions.initialDataLoadSuccess',
		marbles((m) => {
			actions$.setSource(
				m.cold('-(a|)', {
					a: DataLoadActions.initialDataLoad()
				})
			);
			const expected = m.cold('-(a|)', {
				a: DataLoadActions.initialDataLoadSuccess({ news: mockedNews })
			});
			m.expect(effects.loadRssInfo$).toBeObservable(expected);
			m.flush();
		})
	);
});
