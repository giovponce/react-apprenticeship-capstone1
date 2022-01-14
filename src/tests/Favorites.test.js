import React from "react";
import {render} from '@testing-library/react'
import Favorites from '../pages/Favorites'


describe('Favorites', () => {
    test('renders the Favorites component', () => {
      render(<Favorites />);
    });
  });