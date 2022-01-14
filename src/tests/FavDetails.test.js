import React from "react";
import {render} from '@testing-library/react'
import FavDetails from '../pages/FavDetails'


describe('favdetails', () => {
    test('renders the favdetails component', () => {
      render(<FavDetails />);
    });
  });