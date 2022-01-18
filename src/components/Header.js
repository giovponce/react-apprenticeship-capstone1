import React, { useContext } from 'react';
import { StyledLink } from '../utils/StyledComponents/StyledLink';
import { HeaderContainer } from '../utils/StyledComponents/HeaderContainer';
import { Button } from '../utils/StyledComponents/Button';
import Search from './Search';
import { ThemeContext } from '../Context/ThemeContext';



export default function Header({ getVideoResult }) {
    
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

    return (
        <HeaderContainer>
            <Search getVideoResult={getVideoResult}/> 
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/favorites">Favorites</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
            <Button onClick={changeTheme}>Change theme</Button>
        </HeaderContainer>
    )
}
