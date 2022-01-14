import React from "react";
import {render} from '@testing-library/react'
import Details from '../pages/Details'


describe('details', () => {
    test('renders the details component', () => {
      render(<Details />);
    });
  });