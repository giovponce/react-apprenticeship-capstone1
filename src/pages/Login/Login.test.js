import React from "react";
import {render, screen} from '@testing-library/react'
import Login from '../Login'
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";




test('loads and displays placeholder text', async () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>); 

    expect(screen.getByTitle('placeholder')).toHaveTextContent('Login page!')
})