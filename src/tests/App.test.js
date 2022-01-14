import { render } from '@testing-library/react';

import App from '../components/App';

describe('App', () => {
  test('renders the App component', () => {
    render(<App />);
  });
});