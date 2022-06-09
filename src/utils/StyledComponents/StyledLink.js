import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: rgb(34, 34, 34);
    font-family: sans-serif;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: #00bcd4;
    }
`;

export const StyledA = styled.a`
    text-decoration: none;
    color: rgb(34, 34, 34);
    font-family: sans-serif;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
    cursor:pointer;

    &:hover {
        color: #00bcd4;
    }
`;