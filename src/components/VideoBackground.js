import React from 'react'

const VideoBackground = ({ video_id,autoPlayFlag=true }) => {
  const autoPlay = autoPlayFlag ? "?autoplay=1&mute=1": "";
  return (
    <>
      <iframe width="100%" className='aspect-video'
        src={"https://www.youtube.com/embed/" + video_id+autoPlay}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>
    </>
  )
}

export default VideoBackground;