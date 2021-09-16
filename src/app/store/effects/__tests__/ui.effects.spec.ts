import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { marbles } from 'rxjs-marbles/jest';

import { getMockState } from '@mocks/app-state-mock';
import { UIActions } from '@store/actions';
import { DataLoadActions } from '@store/actions/data-load.actions';
import { UIEffects } from '@store/effects';
import { provide } from '@utils/jest-helpers';
import { ActionMocks } from '@utils/jest-mocks';

describe('UI effects', () => {
	let effects: UIEffects;
	let actions$: ActionMocks<any>;
	let store$: Store<any>;

	beforeEach(() => {
		actions$ = new ActionMocks<any>();
		store$ = of(getMockState()) as Store<any>;
		effects = new UIEffects(provide(actions$), provide(store$));
	});

	it(
		'should set isLoading on user load',
		marbles((m) => {
			actions$.setSource(
				m.cold('-(a|)', {
					a: DataLoadActions.initialDataLoad()
				})
			);

			const expected = m.cold('-(a|)', {
				a: UIActions.startLoading()
			});

			m.expect(effects.startLoading$).toBeObservable(expected);
		})
	);

	it(
		'should unset isLoading on user load success',
		marbles((m) => {
			actions$.setSource(
				m.cold('-(a|)', {
					a: DataLoadActions.initialDataLoadSuccess({ news: [] })
				})
			);

			const expected = m.cold('-(a|)', {
				a: UIActions.stopLoading()
			});

			m.expect(effects.stopLoading$).toBeObservable(expected);
		})
	);

	it(
		'should unset isLoading on user load failure',
		marbles((m) => {
			actions$.setSource(
				m.cold('-(a|)', {
					a: DataLoadActions.initialDataLoadFailure()
				})
			);

			const expected = m.cold('-(a|)', {
				a: UIActions.stopLoading()
			});

			m.expect(effects.stopLoading$).toBeObservable(expected);
		})
	);
});
