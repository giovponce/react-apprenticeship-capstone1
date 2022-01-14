import styled from "styled-components";

export const MainVideoTitle = styled.h2`
    color: rgb(34, 34, 34);
    font-family: sans-serif;
    text-transform: capitalize;
    font-weight: bold;

`;

export const VideoTitle = styled.p`
    color: rgb(34, 34, 34);
    font-family: sans-serif;
    text-transform: capitalize;

    ${props => props.variant === 'description' ? 'font-weight: normal; overflow-wrap: break-word;' : 'font-weight: bold;' }

    &:hover {
        color: #00bcd4;
        cursor: pointer;
    }
    
`;
