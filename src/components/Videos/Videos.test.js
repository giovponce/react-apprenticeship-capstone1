import React from 'react';
import { screen, render } from '@testing-library/react';
import  Videos   from '/Users/giovanna.ponce/Documents/capstone1/src/components/Videos/Videos.jsx';



describe('Videos', () => {
    it('must display a title', () => {
        render(<Videos />);
        expect(screen.getByText(/videos/i)).toBeInTheDocument();
    });
    it('must render data from json', () => {
        render(<Videos />);
        expect(screen.getByText(/Silicon Valley en México/i)).toBeInTheDocument();
    });
    it('must truncate the text', () => {
        render(<Videos />);
        expect(screen.getByText(/Wizeline hace sentir a em.../i)).toBeInTheDocument();
    });
});
