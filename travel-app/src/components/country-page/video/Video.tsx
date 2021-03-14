import './video.css';
import React, { useEffect, useState } from 'react';
// import ReactPlayer from 'react-player';
import ReactPlayer from 'react-player/lazy'
import { TargetElement } from '@testing-library/user-event';

type videoType = {
  src: string
}

export const Video: React.FC<videoType> = ({ src }) => {
  console.log(src)
  const [videoWidth, setVideoWidth] = useState(480)
  useEffect(() => {
    const changeWidthSize = (event: any) => {
      if (event.target.innerWidth < 550) { setVideoWidth(240) }
      if (event.target.innerWidth > 550) { setVideoWidth(480) }
    }
    window.addEventListener('resize', changeWidthSize)
    return (() => {
      window.removeEventListener('resize', changeWidthSize)
    })
  }, [])

  return (
    <ReactPlayer url={src} controls={true} width={`${videoWidth}px`} height='240px' className='video_wrapper' />
  );
}

