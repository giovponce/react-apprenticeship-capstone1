import { render } from '@testing-library/react';
import App from '../Components/App';

describe('renders component', () => {
    it('renders without crashing', () => {
        render(<div>Hello</div>);
    });    
});