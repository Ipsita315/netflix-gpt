import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='video-details-sec'>
        <h1 className='video-details__title'>{title}</h1>
        <p className='video-details__desc'>{overview}</p>
    </div>
  )
}

export default VideoTitle;