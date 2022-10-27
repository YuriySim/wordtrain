import React, { useRef } from 'react';

import Footage from './Footage';
import Button from './Button';
import ProgressBar from './ProgressBar';
import Volume from './Volume';

import cl from './Video.module.css';

import useVideoPlayer from './hooks/useVideoPlayer'

import PlayBigIcon from './resources/play-big.svg';
import PlayIcon from './resources/play.svg';
import PauseIcon from './resources/pause.svg';
import MuteIcon from './resources/mute.svg';
import UnmuteIcon from './resources/unmute.svg';
import FullIcon from './resources/full.svg';


const Video = ({posterPath, videoPath}: any) => {
  const videoElement = useRef(null);
  const volumeElement = useRef(null);

  const {
    playing,
    progress,
    muted,
    volume,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoVolume,
    toggleMute,
    toggleFullscreen,
  } = useVideoPlayer(videoElement, volumeElement);


  return (
    <div className={cl.content}>
      <div className={cl.container}>
        <Footage
          refVideo={videoElement}
          poster={posterPath}
          srcVideo={videoPath}
          updateFn={handleOnTimeUpdate}
        />

        <div className={cl.controls}>
          <Button 
            iconOn={PlayBigIcon}
            classNm={playing ? cl.playHide : cl.play}
            toggle={togglePlay}
            title={"Play"}
            size={60}
          />

          <div className={cl.controlsPanel}>
            <ProgressBar
              onChange={handleVideoProgress}
              progress={progress}
            />

            <div className={cl.controlsPanelLeft}>
              <Button 
                iconOn={PlayIcon}
                iconOff={PauseIcon}
                classNm={playing ? cl.btnOff : cl.btnOn}
                toggle={togglePlay}
                title={"Play/Pause"}
                size={32}
              />

              <div className={cl.volume}>
                <Button
                  iconOn={UnmuteIcon}
                  iconOff={MuteIcon}
                  classNm={muted ? cl.btnOff : cl.btnOn}
                  toggle={toggleMute}
                  title={"Turn on/off the sound"}
                  size={32}
                />

                <Volume
                  refVolume={volumeElement}
                  onChange={handleVideoVolume}
                  volume={volume}
                />
              </div>
            </div>

            <Button 
              iconOn={FullIcon}
              classNm={cl.btnOn}
              toggle={toggleFullscreen}
              title={"Full Screen"}
              size={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;