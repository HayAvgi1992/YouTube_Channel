import './VideoIteam.css';
import React from 'react';

const VideoIteam = ({ video, onVideoSelect}) => {
    return (
        <div className="video-item item" onClick={() => {onVideoSelect(video)}}>
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}></img>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )}

export default VideoIteam;