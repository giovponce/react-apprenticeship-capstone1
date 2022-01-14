import React from 'react';
import { VideoTitle, MainVideoTitle } from '../../utils/StyledComponents/VideoTitle';
import { MainVideoContainer, VideosContainer, VideoElement } from '../../utils/StyledComponents/VideosContainer';
import { Thumbnail } from '../../utils/StyledComponents/Thumbnail';
import { FlexContainer } from '../../utils/StyledComponents/FlexContainer';
import { IFrameStyled } from '../../utils/StyledComponents/IFrameStyled';
import { useParams } from 'react-router-dom';



function DetailsPage({videosList}) {
  console.log(videosList);
  const { id } = useParams();
  console.log(id);

  const videos = videosList ? videosList : [];
  console.log(videos);
  const [selected] = videos.filter((video) => video.id.videoId === id);
  const videoTitle = selected ? selected.snippet.title : '';
  const videoDescription = selected ? selected.snippet.description : '';

    return (
        <div>
            <FlexContainer>
                <MainVideoContainer>
                    <MainVideoTitle variant="mainTitle">{videoTitle}</MainVideoTitle>
                    <IFrameStyled
                    title={id}
                    src={`https://www.youtube.com/embed/${id}`}>
                    </IFrameStyled>
                    <VideoTitle variant="description">{videoDescription}</VideoTitle>
                </MainVideoContainer>

                <VideosContainer>
                {videos.map((video) => {
                    return(
                        <VideoElement key={video.etag}>
                            <Thumbnail src={video.snippet.thumbnails.default.url} alt=""/><br/>
                            <VideoTitle>{video.snippet.title}</VideoTitle>  
                        </VideoElement>
                    )}
                )}
                </VideosContainer>
            </FlexContainer>

            


        </div>
    )
}

export default DetailsPage;
