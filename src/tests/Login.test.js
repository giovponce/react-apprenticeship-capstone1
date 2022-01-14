import React from "react";
import {render} from '@testing-library/react';
import Login from '../pages/Login';


describe('Login', () => {
    test('renders the Login component', () => {
      render(<Login />);
    });
  });