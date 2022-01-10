import styled from 'styled-components';

export const VideosContainer = styled.div`
    padding-top: 1em;
    margin-left: 2em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const VideoElement = styled.div`
    padding: 15px;
    text-align: center;
`;