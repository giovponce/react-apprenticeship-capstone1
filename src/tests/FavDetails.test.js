import React from "react";
import {fireEvent, render, screen} from '@testing-library/react'
import FavDetails from '../pages/FavDetails'


describe('favdetails', () => {
    test('renders the favdetails component', () => {
      render(<FavDetails />);
    });

    // test('must direct to video details when clicking video', () => {
    //   render(<FavDetails />);
    //   fireEvent.click(screen.getAllByRole('link')[0]);
    //   //then
    //   expect(screen.getByText(/Video Details/i)).toBeInTheDocument();
    // })

  });