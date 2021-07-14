import React from 'react';
import "./video.css";


const VideoItem = (props) => {
  
    return(
        <div className="video-item" onClick={() => props.onVideoSelect(props.video)} >
                <img className="video-image" src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title}/>
                <div className="video-content"> 
                <div className="video-header">{props.video.snippet.title}</div>
           </div> 
        </div>        
    );
} 

export default VideoItem;