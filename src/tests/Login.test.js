import React from "react";
import {render, screen} from '@testing-library/react';
import Login from '../pages/Login';
import { AuthProvider } from '../Context/AuthContext';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('Login', () => {
    test('renders the Login component', () => {
      render(<Login />);
    });

    test('must have a user input', () => {
        render(<Login />);
        const userInput = screen.getByPlaceholderText('Username');
        expect(userInput).toBeInTheDocument();
    });

    test('must have a password input', () => {
        render(<Login />);
        const passwordInput = screen.getByPlaceholderText('Password');
        expect(passwordInput).toBeInTheDocument();
    });

    test('must allow login with right credentials', () => {
      render(<AuthProvider value='test'><Login/></AuthProvider>);
        const userInput = screen.getByPlaceholderText('Username');
        const passwordInput = screen.getByPlaceholderText('Password');
        const button = screen.getByTestId('loginBtn');
        userInput.value = 'wizeline';
        passwordInput.value = 'Rocks!';
        button.click();

        expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
      });
      
      test('must now allow login with wrong credentials', () => {
        render(<AuthProvider value='test'><Login/></AuthProvider>);
          const userInput = screen.getByPlaceholderText('Username');
          const passwordInput = screen.getByPlaceholderText('Password');
          const button = screen.getByTestId('loginBtn');
          userInput.value = 'wizeline';
          passwordInput.value = 'test';
          button.click();
  
          expect(window.alert).toHaveBeenCalledWith('Wrong username or password');
        });

  });