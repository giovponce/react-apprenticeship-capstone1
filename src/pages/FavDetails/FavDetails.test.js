import React from "react";
import {render, screen} from '@testing-library/react'
import FavDetails from '../FavDetails'
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";


test('loads and displays placeholder text', async () => {
    render(
        <BrowserRouter>
            <FavDetails />
        </BrowserRouter>);
 
     expect(screen.getByText('fav details page (private)')).toBeInTheDocument();
})