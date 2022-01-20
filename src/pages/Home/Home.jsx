import React from 'react';
import { VideosContainer, VideoElement } from '../../utils/StyledComponents/VideosContainer';
import { H1 } from '../../utils/StyledComponents/H1';
import { Thumbnail } from '../../utils/StyledComponents/Thumbnail';
import { VideoTitle } from '../../utils/StyledComponents/VideoTitle';
import { StyledLink } from '../../utils/StyledComponents/StyledLink';


function Home({ videosList }) {


  return (
    <div>
      <H1>Videos</H1>
        <>
          <VideosContainer>
            {videosList ? videosList.map((video) => (
                <StyledLink to={`/details/${video.id.videoId}`} key={video.id.videoId}>
                  <VideoElement  key={video.etag}>
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

export default Home;
