import React from 'react';
import { H1 } from '../../utils/StyledComponents/H1';
import { VideosContainer, VideoElement } from '../../utils/StyledComponents/VideosContainer';
import { Thumbnail } from '../../utils/StyledComponents/Thumbnail';
import { VideoTitle } from '../../utils/StyledComponents/VideoTitle';
import { StyledLink } from '../../utils/StyledComponents/StyledLink';

export default function FavoritesPage({ favoriteVideos}) {
  console.log(favoriteVideos);



    return (
      <div>
      <H1>Favorite Videos</H1>
        <>
          <VideosContainer>
            {favoriteVideos ? favoriteVideos.map((video) => (
                <StyledLink to={`/favDetails/${video.id.videoId}`} key={video.etag}>
                  <VideoElement style={{width:'15em', height:'15em'}} key={video.id.videoId}>
                      <Thumbnail src={video.snippet.thumbnails.default.url} alt=""/><br/>
                      <VideoTitle>{video.snippet.title}</VideoTitle>  
                  </VideoElement>
                </StyledLink>
              )) : 'There are no videos'}
          </VideosContainer>
        </>
     
        
    </div>
      );
}
