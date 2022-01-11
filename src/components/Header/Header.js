import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { StyledLink } from '../Styled/StyledLink';
import { SearchBar, SearchBtn, SearchInput } from '../Styled/SearchBar';
import { HeaderContainer } from '../Styled/HeaderContainer';


export default function Header() {


    return (
        <HeaderContainer> 
            <SearchBar>
                <SearchInput type="text"></SearchInput>
                <SearchBtn>
                    <AiOutlineSearch />
                </SearchBtn>
             </SearchBar>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/favorites">Favorites</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
        </HeaderContainer>
    )
}
