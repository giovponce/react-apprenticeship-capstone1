import styled from 'styled-components';

export const Thumbnail = styled.img`
    width: 70%;
    height: 70%;
    object-fit: cover;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;