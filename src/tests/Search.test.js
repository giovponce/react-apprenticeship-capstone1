import { render, screen } from '@testing-library/react';

import Search from '../components/Search';

describe('Search', () => {
  test('renders the Search component', () => {
    render(<Search />);
    expect(screen.getByText('Search')).toBeInTheDocument();
  });
});