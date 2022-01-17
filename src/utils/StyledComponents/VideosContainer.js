import styled from 'styled-components';

export const MainVideoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const VideosContainer = styled.div`
    padding-top: 1em;
    margin-left: 2em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const VideoElement = styled.a`
    padding: 15px;
    text-align: center;
`;