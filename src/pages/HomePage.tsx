import React from 'react';
import Video from '../components/video/'

const HomePage = () => {
  const posterPath = require('../assets/video/poster.png');
  const videoPath = require('../assets/video/video.mp4');

  return (
    <div className="w-full grow flex justify-center items-center">
      <Video
        posterPath={posterPath}
        videoPath={videoPath}
      />
    </div>
  )
}

export default HomePage;