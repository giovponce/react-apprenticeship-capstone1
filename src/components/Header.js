import React, { useContext } from 'react';
import { StyledLink } from '../utils/StyledComponents/StyledLink';
import { HeaderContainer } from '../utils/StyledComponents/HeaderContainer';
import { Button } from '../utils/StyledComponents/Button';
import Search from './Search';
import { ThemeContext } from '../Context/GlobalContext';


export default function Header({ searchTerm, updateSearchTerm, getVideoResult }) {
    
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const changeTheme = () => {
        if (darkMode)
          theme.dispatch({ type: "LIGHTMODE" });
        else
          theme.dispatch({ type: "DARKMODE" });
      };

    return (
        <HeaderContainer>
            <Search searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} getVideoResult={getVideoResult}/> 
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/favorites">Favorites</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
            <Button onClick={changeTheme}>Change theme</Button>
        </HeaderContainer>
    )
}
