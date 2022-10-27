import React from 'react';

const Footage = ({refVideo, poster, srcVideo, updateFn}: any) => {
  return (
    <video
      ref={refVideo}
      poster={poster}
      onTimeUpdate={updateFn}
    >
      <source src={srcVideo} type="video/mp4" />

      <p>Your browser does not support video playback. Go to <a href="https://youtu.be/neSP6iyRBT4">link</a></p>
    </video>
  );
};

export default Footage;