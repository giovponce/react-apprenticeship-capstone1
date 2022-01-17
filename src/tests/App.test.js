import { render, screen } from '@testing-library/react';

import App from '../components/App';

describe('App', () => {
  test('renders the App component', () => {
    render(<App />);
  });

  test('must display header', () => {
    render(<App />);
    const header = screen.getByText(/Search/i);
    expect(header).toBeInTheDocument();
  });


});
