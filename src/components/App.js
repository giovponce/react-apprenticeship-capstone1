import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import DetailsPage from '../pages/Details';
import Favorites from '../pages/Favorites';
import FavDetails from '../pages/FavDetails';
import Login from '../pages/Login';
import Header from '../components/Header';
import useAxiosFetch  from '../utils/hooks/UseAxiosFetch';

const API_KEY = 'AIzaSyBHaI3fGkb4ESH7TLnAEZfzcYLT6xJ7V74';
const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&key=${API_KEY}&q=`;


function App() {

  const [ searchTerm, setSearchTerm ] = React.useState('Wizeline');
  const [ search, setSearch ] = React.useState('');

  const { videosList } = useAxiosFetch( 
    `${API_URL}${searchTerm}`, search
  )

  const updateSearchTerm = (q) => {
    setSearchTerm(q)
  };

  const getVideoResult = (newSearch) => {
    setSearch(newSearch)
  }

    return (
        <BrowserRouter>
          <div>
            <Header  searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} getVideoResult={getVideoResult}/>
            <Routes>
              <Route path="/"
              element={
              <Home videosList={videosList} />
              }>
              </Route>
              <Route path="/details/:id"
                element={
                  <DetailsPage 
                  videosList={videosList}
                />
                  }>
              </Route>
              <Route exact path="/favorites"
                element={
                  <Favorites />
                  }>
              </Route>
              <Route exact path="/favDetails"
                element={
                  <FavDetails />
                  }>
              </Route>
              <Route exact path="/login"
                element={
                  <Login />
                  }>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
    )
}

export default App
