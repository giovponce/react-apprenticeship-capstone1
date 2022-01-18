import { ThemeContext } from "../Context/ThemeContext";
import {render} from '@testing-library/react';

describe('theme context', () => {
    

    test('initial theme should be light', () => {
        const { container } = render(<ThemeContext.Provider value={{ state: { darkMode: false } }}>
            <div>
                <h1>Hello</h1>
            </div>
        </ThemeContext.Provider>);
        expect(container.firstChild).toMatchSnapshot(); //eslint-disable-line
    });
});