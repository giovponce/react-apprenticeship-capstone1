import React from 'react';
import { VideoTitle, MainVideoTitle } from '../../utils/StyledComponents/VideoTitle';
import { MainVideoContainer, VideosContainer, VideoElement } from '../../utils/StyledComponents/VideosContainer';
import { Thumbnail } from '../../utils/StyledComponents/Thumbnail';
import { FlexContainer } from '../../utils/StyledComponents/FlexContainer';
import { IFrameStyled } from '../../utils/StyledComponents/IFrameStyled';
import { StyledLink } from '../../utils/StyledComponents/StyledLink';
import { useAuth } from '../../Context/AuthContext';
import { useParams } from 'react-router-dom';



export default function FavDetails({  favoriteVideos }) {

    const { authenticated } = useAuth();
    const { id } = useParams();


    const videos = favoriteVideos ? favoriteVideos : [];
    const [selected] = videos.filter((video) => video.id.videoId === id);
    const videoTitle = selected ? selected.snippet.title : '';
    const videoDescription = selected ? selected.snippet.description : '';

    return (
        <div>
        <FlexContainer>
        {authenticated ? (
            <>
            <MainVideoContainer>
                <MainVideoTitle variant="mainTitle">{videoTitle} </MainVideoTitle>            
                <IFrameStyled
                title={id}
                src={`https://www.youtube.com/embed/${id}`}>
                </IFrameStyled>
                <VideoTitle variant="description">{videoDescription}</VideoTitle>
            </MainVideoContainer>

            <VideosContainer>
            {favoriteVideos ? favoriteVideos.map((video) => (
                <StyledLink to={`/favDetails/${video.id.videoId}`} key={video}>
                  <VideoElement style={{width:'15em', height:'15em'}} key={video.etag}>
                      <Thumbnail src={video.snippet.thumbnails.default.url} alt=""/><br/>
                      <VideoTitle>{video.snippet.title}</VideoTitle>  
                  </VideoElement>
                </StyledLink>
              )) : 'There are no videos'}
            </VideosContainer>
            </>
        ):(
            <>
            <h1>please login to see this page</h1>
            </>
        )}
        </FlexContainer>
    </div>
    )
}
