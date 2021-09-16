import { UIActions } from '@store/actions';
import { commonUIInitialState, CommonUIState, uiReducer } from '@store/reducers';

describe('uiReducer', () => {
	let initialState: CommonUIState;

	beforeEach(() => {
		initialState = { ...commonUIInitialState };
	});

	it('should contain initial state', () => {
		const result = uiReducer(undefined, { type: '' } as any);
		expect(result).toMatchSnapshot();
	});
	describe('UIActions.startLoading', () => {
		it('should set isLoading to true', () => {
			const result = uiReducer(initialState, UIActions.startLoading());
			expect(result).toMatchSnapshot();
		});
	});

	describe('UIActions.stopLoading', () => {
		it('should set isLoading to false', () => {
			const result = uiReducer(initialState, UIActions.stopLoading());
			expect(result).toMatchSnapshot();
		});
	});
});
