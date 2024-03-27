import React from 'react'

const VideoBackground = ({ video_id }) => {
  return (
    <>
      <iframe width="100%" className='aspect-video'
        src={"https://www.youtube.com/embed/" + video_id+"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>
    </>
  )
}

export default VideoBackground;