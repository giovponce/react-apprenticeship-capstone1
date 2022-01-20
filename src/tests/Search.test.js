import { render, screen } from '@testing-library/react';
import Search from '../components/Search';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Search', () => {
  test('renders the Search component', () => {
    render(<Search />);
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  test('query is changed', () => {
    render(<Search />);
    const input = screen.getByPlaceholderText('Search');
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('test');
  });
});