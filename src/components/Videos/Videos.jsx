import React from 'react'
import { mockItems } from '../../mocks/youtube-videos-mock'
import styles from './Videos.module.scss' 
import { Thumbnail } from '../styled/Thumbnail'
import { VideoTitle } from '../styled/VideoTitle'
import { H1 } from '../styled/H1'
import { VideosContainer, VideoElement } from '../styled/VideosContainer'

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
                <VideoElement className={styles.element} key={video.etag}>
                    <Thumbnail src={video.snippet.thumbnails.default.url} alt=""/><br/>
                    <VideoTitle className={styles.videoTitle}>{truncate(video.snippet.title)}</VideoTitle>  
                </VideoElement>
            )}
        )}
      </VideosContainer>
        </div>
    )
}

export default Videos;
