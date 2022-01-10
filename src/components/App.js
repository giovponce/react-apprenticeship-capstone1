import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from '../pages/Home'
import DetailsPage from '../pages/Details'
import Favorites from '../pages/Favorites'
import FavDetails from '../pages/FavDetails'
import Login from '../pages/Login'

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/details">
              <DetailsPage />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
            <Route exact path="/favDetails">
              <FavDetails />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
        </BrowserRouter>
    )
}

export default App
