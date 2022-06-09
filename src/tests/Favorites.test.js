import React from "react";
import {render} from '@testing-library/react'
import Favorites from '../pages/Favorites'


describe('Favorites', () => {
    test('renders the Favorites component', () => {
      render(<Favorites />);
    });

    test('must be able to retrieve from local storage', () => {
      render(<Favorites />);
      const items = { ...localStorage };
      expect(items).toBeTruthy();
    });


  });