import React from "react";
import {screen, render} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import Header from "/Users/giovanna.ponce/Documents/capstone1/src/components/Header/Header.js";


describe("Header", () => {
    it("must display Home btn", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>);
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
    });
    it("must display Favorites btn", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>);
        expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
    });
    it("must display Login btn", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>);
        expect(screen.getByText(/Login/i)).toBeInTheDocument();
    });
});