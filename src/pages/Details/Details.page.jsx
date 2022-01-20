import React from 'react';
import { VideoTitle, MainVideoTitle } from '../../utils/StyledComponents/VideoTitle';
import { MainVideoContainer, VideosContainer, VideoElement } from '../../utils/StyledComponents/VideosContainer';
import { Thumbnail } from '../../utils/StyledComponents/Thumbnail';
import { FlexContainer } from '../../utils/StyledComponents/FlexContainer';
import { IFrameStyled } from '../../utils/StyledComponents/IFrameStyled';
import { useParams } from 'react-router-dom';
import { StyledLink } from '../../utils/StyledComponents/StyledLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import { useAuth } from '../../Context/AuthContext';
import './Details.page.css';



function DetailsPage({videosList}) {
    
  const { authenticated } = useAuth();
  const { id } = useParams();

  const videos = videosList ? videosList : [];
  const [selected] = videos.filter((video) => video.id.videoId === id);
  const videoTitle = selected ? selected.snippet.title : '';
  const videoDescription = selected ? selected.snippet.description : '';

  function saveToFavs() {
    let id = selected.id.videoId;
    localStorage.setItem(id, JSON.stringify(selected));
    alert('Video added to favorites');
    window.location.reload();
  }

    return (
        <div>
            <FlexContainer>
                <MainVideoContainer>
                {authenticated ? (
                    <>
                    <MainVideoTitle variant="mainTitle">{videoTitle} 
                        <FontAwesomeIcon onClick={saveToFavs} icon={faHeart} size="lg" className='heartBtn' data-tip data-for='heartBtn'/>
                    </MainVideoTitle>
                    <ReactTooltip id="heartBtn" place='right' type='error' className='tooltipHeart'>
                        Save to Favorites
                    </ReactTooltip>
                    </>
                ):(
                    <>
                    <MainVideoTitle variant="mainTitle">{videoTitle} 
                        <FontAwesomeIcon icon={faHeart} size="lg" className='heartBtnDisabled' data-tip data-for='heartBtn'/>
                    </MainVideoTitle>
                    <ReactTooltip id="heartBtn" place='right' type='error' className='tooltipHeart'>
                        Login to save to Favorites
                    </ReactTooltip>
                    </>
                )}
                    <IFrameStyled
                    title={id}
                    src={`https://www.youtube.com/embed/${id}`}>
                    </IFrameStyled>
                    <VideoTitle variant="description">{videoDescription}</VideoTitle>
                    
                </MainVideoContainer>

                <VideosContainer>
                {videos.map((video) => {
                    return(
                        <StyledLink to={`/details/${video.id.videoId}`} key={video.id.videoId}>
                            <VideoElement key={video.etag}>
                                <Thumbnail src={video.snippet.thumbnails.default.url} alt=""/><br/>
                                <VideoTitle>{video.snippet.title}</VideoTitle>  
                            </VideoElement>
                        </StyledLink>
                    )}
                )}
                </VideosContainer>
            </FlexContainer>
        </div>
    )
}

export default DetailsPage;
