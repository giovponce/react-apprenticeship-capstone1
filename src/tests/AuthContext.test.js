import { render } from '@testing-library/react';
import { AuthContext } from '../Context/AuthContext';


describe('user context', () => {
    test('initial authenticated should be false', () => {
        const { container } = render(<AuthContext.Provider value={{ state: { authenticated: false } }}>
            <div>
                <h1>Hello</h1>
            </div>
        </AuthContext.Provider>);
        expect(container.firstChild).toMatchSnapshot(); //eslint-disable-line
    });


})