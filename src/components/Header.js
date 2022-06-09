import React, { useContext } from 'react';
import { StyledLink, StyledA } from '../utils/StyledComponents/StyledLink';
import { HeaderContainer } from '../utils/StyledComponents/HeaderContainer';
import { Button } from '../utils/StyledComponents/Button';
import Search from './Search';
import { ThemeContext } from '../Context/ThemeContext';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';


export default function Header({ getVideoResult, getFavVideos }) {
    
    const { authenticated, logout } = useAuth();
    const navigate = useNavigate();

    const theme = useContext(ThemeContext);
    const { darkMode } = theme?.state ?? {};

    const light = "LIGHTMODE"
    const dark = "DARKMODE"

    const changeTheme = () => {
        if (darkMode)
          theme.dispatch({ type: light });
        else
          theme.dispatch({ type: dark });
    };

    const items = { ...localStorage };
    const videoIds = items ? Object.keys(items) : [];

    for( var i = 0; i < videoIds.length; i++){   
        if ( videoIds[i] === 'wa_cert_authenticated') { 
        videoIds.splice(i, 1); 
        }
    }

    function reload(){
        getFavVideos(videoIds);
        navigate('/favorites');
    }

    return (
        <HeaderContainer>
            <Search getVideoResult={getVideoResult}/> 
            <StyledLink to="/">Home</StyledLink>
            {authenticated ? (
                <>
            <StyledA onClick={reload}>Favorites</StyledA>
            <StyledA onClick={logout}>Logout</StyledA>
                </>
            ) : (
                <StyledLink to="/login">Login</StyledLink>
            )}
            <Button onClick={changeTheme}>Change theme</Button>
        </HeaderContainer>
    )
}
