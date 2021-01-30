import React from 'react';
import VideoIteam from './VideoIteam';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map( video => {
        return <VideoIteam key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>
    })
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList