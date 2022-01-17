import React from "react";
import {render, screen} from '@testing-library/react'
import Details from '../pages/Details'


describe('details', () => {
    test('renders the details component', () => {
      render(<Details />);
    });

    test('element with role heading exists', () => {
      render(<Details />);
      const heading = screen.getByRole('heading');
      expect(heading).toBeInTheDocument();
    })

  });