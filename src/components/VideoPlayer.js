import React from 'react';
import { IFrameStyled } from '../utils/StyledComponents/IFrameStyled';
import { VideoTitle } from '..//utils/StyledComponents/VideoTitle';



export default function VideoPlayer(id) {

    console.log(id);

    if(!id){
        return (
            <VideoTitle>No video to show</VideoTitle>
        )
    }

    return (
        <div>
            <IFrameStyled
            title={id}
            src={`https://www.youtube.com/embed/${id.videoId}`}>
            </IFrameStyled>
        </div>
    )
}
