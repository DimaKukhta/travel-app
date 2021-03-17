import './video.css';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy'

type videoType = {
  src: string
}

export const Video: React.FC<videoType> = ({ src }) => {
  console.log(src)
  const [videoWidth, setVideoWidth] = useState(600)
  const [videoHeight, setVideoHeight] = useState(320)
  useEffect(() => {
    const changeWidthSize = (event: any) => {
      if (event.target.innerWidth < 610) {
        setVideoWidth(328)
        setVideoHeight(200)
      }
      if (event.target.innerWidth > 610) {
        setVideoWidth(600)
        setVideoHeight(320)
      }
    }
    window.addEventListener('resize', changeWidthSize)
    return (() => {
      window.removeEventListener('resize', changeWidthSize)
    })
  }, [])

  return (
    <ReactPlayer url={src} controls={true} width={`${videoWidth}px`} height={`${videoHeight}px`} className='video_wrapper' />
  );
}

