import React, { useContext }from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import DetailsPage from '../pages/Details';
import FavoritesPage from '../pages/Favorites';
import FavDetails from '../pages/FavDetails';
import Login from '../pages/Login';
import Header from '../components/Header';
import useAxiosFetch  from '../utils/hooks/UseAxiosFetch';
import { ThemeContext } from "../Context/ThemeContext";
import { useQuery } from '../Context/QueryContext';
import { AuthProvider, useAuth } from '../Context/AuthContext';
import './App.css';
import { mockItems } from '../mocks/youtube-videos-mock';


const API_URL = `${process.env.REACT_APP_SEARCH_URL}`;

function App() {
  const theme = useContext(ThemeContext);
  const { state }  = theme ? theme : {};
  const { darkMode } = state ? state : {};

  const PrivateRoute = ({ children }) => {
    const { authenticated}  = useAuth();
    return authenticated ? children : <Navigate to="/" />;
  }


  const term = useQuery();
  const [ search, setSearch ] = React.useState('');

  const { videosList } = useAxiosFetch( 
    `${API_URL}${term}`, search
  )

  const getVideoResult = (newSearch) => {
    setSearch(newSearch)
  }

  const items = { ...localStorage };
  const videoIds = items ? Object.keys(items) : [];
  
  for( var i = 0; i < videoIds.length; i++){   
    if ( videoIds[i] === 'wa_cert_authenticated') { 
      videoIds.splice(i, 1); 
    }
  }
  
  const API_URL2 = `${process.env.REACT_APP_FAVORITES_URL}`;
  
  let favoriteVideos = [];
   async function getFavVideos(videoIds){   
     console.log(videoIds);
      videoIds.forEach(async (videoId) => {
          try {
              const response = await axios.get(`${API_URL2}${videoId}`);
              const items = await response.data.items;
              favoriteVideos.push(items[0]);
          } catch (error) {
              console.error(error);
          }
      })  
  };

  if(videoIds.length > 0){
    getFavVideos(videoIds);
  }else{
    favoriteVideos = mockItems;
  }

    return (
        <BrowserRouter>
          <div className={`${darkMode ? "darkTheme" : "lightTheme"}`}>
          <AuthProvider>
            <Header getVideoResult={getVideoResult} getFavVideos={getFavVideos}/>
            </AuthProvider>
            <Routes>
              <Route path="/"
              element={<Home videosList={videosList} />}>
              </Route>
              <Route path="/details/:id"
                element={<DetailsPage videosList={videosList}/>}>
              </Route>
              <Route path="/favorites" 
                element={
                <PrivateRoute>
                  <FavoritesPage favoriteVideos={favoriteVideos}/>
                </PrivateRoute>}>
              </Route>
              <Route path="/favDetails/:id"
                element={
                <PrivateRoute>
                  <FavDetails favoriteVideos={favoriteVideos}/>
                </PrivateRoute>}>
              </Route>
              <Route exact path="/login"
                element={<Login />}>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
    )
}

export default App;

