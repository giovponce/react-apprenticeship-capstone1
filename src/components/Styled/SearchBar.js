import styled from 'styled-components';

export const SearchBar = styled.div`
    display: flex;
`;

export const SearchInput = styled.input`
    max-width: 75%;
`;

export const SearchBtn = styled.button`
    display: flex;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        opacity: 0.7;
    }
`;