import { render, screen } from '@testing-library/react';
import Header from '../components/App';


describe('Header', () => {
    test('header should have search btn', () => {
        render(<Header />);
        const header = screen.getByText(/Search/i);
        expect(header).toBeInTheDocument();
      });
    
      test('header should have home btn', () => {
        render(<Header />);
        const header = screen.getByText(/Home/i);
        expect(header).toBeInTheDocument();
      });
    
      test('header should have favorites btn', () => {
        render(<Header />);
        const header = screen.getByText(/Favorites/i);
        expect(header).toBeInTheDocument();
      });
});