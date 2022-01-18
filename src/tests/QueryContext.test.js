import Search from '../components/Search';
import { render, screen} from '@testing-library/react';
import { QueryProvider } from '../Context/QueryContext';

describe('Query context', () => {
    test('initial value is wizeline', () => {
        render(<QueryProvider><Search/></QueryProvider>);
        const inputText = screen.getByTestId("search-input");
        expect(inputText.value).toBe("Wizeline");
    });
    // test('initial value is changed', () => {
    //     render(<QueryContext.Provider value='test'><Search/></QueryContext.Provider>);
    //     const inputText = screen.getByTestId("search-input");
    //     expect(inputText.value).toBe("test");
    // });
});