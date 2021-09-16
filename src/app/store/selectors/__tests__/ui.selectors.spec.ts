import { commonUIInitialState, CommonUIState } from '@store/reducers';
import { getIsAppLoading } from '@store/selectors';

const getCommonUIState = (newValue?: Partial<CommonUIState>) => ({
	commonUI: {
		...commonUIInitialState,
		...newValue
	}
});

describe('UI Selectors', () => {
	it('should return UI state', () => {
		const result = getCommonUIState();
		expect(result).toMatchSnapshot();
	});

	it('should return isLoading false', () => {
		const result = getIsAppLoading(getCommonUIState());
		expect(result).toMatchSnapshot();
	});

	it('should return isLoading true', () => {
		const result = getIsAppLoading(getCommonUIState({ isLoading: true }));
		expect(result).toMatchSnapshot();
	});
});
