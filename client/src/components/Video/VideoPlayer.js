import React from "react";
// import "./video.css";


const VideoPlayer = ( props ) => {
  if (props.video) {
  const videoSrc=`https://youtube.com/embed/${props.video.id.videoId}`;
  return(  
    <div>  
      <div className="embed-responsive embeded">
        <iframe allowFullScreen="allowFullScreen"
         title={props.video.snippet.title}
         src={videoSrc}  />
     </div>
      <div className="card">
        <h3>{props.video.snippet.title}</h3>
       <p>{props.video.snippet.description}</p>
     </div>
   </div>
);

  }
  else {
    return (
      <div></div>
   )
}
};


export default VideoPlayer;

