import React from 'react';

import cl from './Video.module.css';

const ProgressBar = ({onChange, progress}: any) => {
  return (
    <div className={cl.progressBar}>
      <input
        type="range"
        min="0"
        max="100"
        className={cl.progressBar}
        value={progress}
        onChange={(e) => onChange(e)}
        style={{backgroundSize: `${progress}% 100%`}}
      />
    </div>
  );
};

export default ProgressBar;