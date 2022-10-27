import { useState, useEffect } from "react";

const useVideoPlayer = (videoElement, volumeElement) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(100);


  /* -- Play/Pause -- */
  const togglePlay = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    playing
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playing, videoElement])


  /* -- Progress bar -- */
  const handleOnTimeUpdate = () => {
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setProgress(progress)
  };

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
    setProgress(manualChange)
  };


  /* -- Volume -- */
  const handleVideoVolume = (event) => {
    var manualChange = Number(event.target.value) * 10;
    videoElement.current.volume = manualChange / 100;

    setVolume(manualChange)
  };

  const handleVideoVolumeDefault = () => {
    const volumeDef = 0.1;
    if (!volume && muted) {
      videoElement.current.volume = volumeDef;
      volumeElement.current.value = volumeDef * 10;

      setVolume((volumeDef * 100))
    }
  };

  useEffect(() => {
    if ((!volume && !muted) || (volume && muted)) toggleMute();
  }, [volume])


  /* -- Mute -- */
  const toggleMute = () => {
    handleVideoVolumeDefault();
    setMuted(!muted)
  };

  useEffect(() => {
    muted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  }, [muted, videoElement]);


  /* -- Fullscreen -- */
  const toggleFullscreen = () => {
    if (videoElement.current) {
      videoElement.current.requestFullscreen();
    }
  }

  return {
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
  };
};

export default useVideoPlayer;