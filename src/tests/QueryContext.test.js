import Search from '../components/Search';
import { render, screen} from '@testing-library/react';

describe('Query context', () => {
    test('initial value is empty', () => {
        render(<Search/>);
        const inputText = screen.getByTestId("search-input");
        expect(inputText.textContent).toBe("");
    });
    
});