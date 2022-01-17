import React from 'react'
import { StyledLink } from '../utils/StyledComponents/StyledLink';
import { HeaderContainer } from '../utils/StyledComponents/HeaderContainer';
import Search from './Search'

export default function Header({ searchTerm, updateSearchTerm, getVideoResult }) {

    
    return (
        <HeaderContainer>
            <Search searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} getVideoResult={getVideoResult}/> 
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/favorites">Favorites</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
        </HeaderContainer>
    )
}