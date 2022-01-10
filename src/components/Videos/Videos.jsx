import React from 'react'
import { mockItems } from '../../mocks/youtube-videos-mock'
import { Thumbnail } from '../Styled/Thumbnail'
import { VideoTitle } from '../Styled/VideoTitle'
import { H1 } from '../Styled/H1'
import { VideosContainer, VideoElement } from '../Styled/VideosContainer'

function Videos() {

    function truncate(str, n) {
        return str.length > 29 ? str.substring(0, 25) + "..." : str;
    }

    return (
        <div>
        <H1>Videos</H1>
        <VideosContainer>
        {mockItems.map((video) => {
            return(
                <VideoElement key={video.etag}>
                    <Thumbnail src={video.snippet.thumbnails.default.url} alt=""/><br/>
                    <VideoTitle>{truncate(video.snippet.title)}</VideoTitle>  
                </VideoElement>
            )}
        )}
      </VideosContainer>
        </div>
    )
}

export default Videos;
