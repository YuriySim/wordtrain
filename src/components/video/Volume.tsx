import React from 'react';

const Volume = ({refVolume, onChange, volume}: any) => {
  return (
    <input
      type="range"
      min="0"
      max="10"
      ref={refVolume}
      onChange={(e) => onChange(e)}
      style={{backgroundSize: `${volume}% 100%`}}
    />
  );
};

export default Volume;