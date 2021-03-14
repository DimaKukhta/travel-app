import './video.css';
import React from 'react';
// import ReactPlayer from 'react-player';
import ReactPlayer from 'react-player/lazy'

type videoType = {
  src: string
}

export const Video: React.FC<videoType> = ({src}) =>{
 console.log(src)
  return (
    <ReactPlayer url={src} controls={true} width='360px' height='160px' className='video_wrapper'/>
  );
}

