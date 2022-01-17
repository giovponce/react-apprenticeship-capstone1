import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import Login from '../pages/Login';


describe('Login', () => {
    test('renders the Login component', () => {
      render(<Login />);
    });

    // test('must show login btn', () => {
    //   render(<Login />);
    //   const loginBtn = screen.getByText(/Login/i);
    //   expect(loginBtn).toBeInTheDocument();
    // });

    // test('must allow login', () => {
    //   render(<Login />);
    //   const loginBtn = screen.getByText(/Login/i);
    //   fireEvent.click(loginBtn);
    //   //then expect to be redirected to home page
    // });

  });