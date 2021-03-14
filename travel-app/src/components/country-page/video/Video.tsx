import './video.css';
import React from 'react';
// import ReactPlayer from 'react-player';
import ReactPlayer from 'react-player/lazy'

type videoType = {
  src: string
}

export const Video: React.FC<videoType> = ({ src }) => {
  console.log(src)
  return (
    <ReactPlayer url={src} controls={true} width='480px' height='240px' className='video_wrapper' />
  );
}

