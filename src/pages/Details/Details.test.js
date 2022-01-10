import React from "react";
import {render, screen} from '@testing-library/react'
import Details from '../Details'
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";




test('loads and displays placeholder text', async () => {
    render(
        <BrowserRouter>
            <Details />
        </BrowserRouter>);

    expect(screen.getByTitle('placeholder')).toHaveTextContent('this is the details page')
})