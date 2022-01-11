import React from "react";
import {render, screen} from '@testing-library/react'
import Favorites from '../Favorites'
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";




test('loads and displays placeholder text', async () => {
    render(
        <BrowserRouter>
            <Favorites />
        </BrowserRouter>); 

    expect(screen.getByText('This page will show the favorites')).toBeInTheDocument();
})