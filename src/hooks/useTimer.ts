import {useEffect, useRef, useState} from 'react';
import {POMODORO_SECONDS} from '../constants/base.constants.ts';
import {EnumTimerMode} from '../types/base.types.ts';
import Sound from 'react-native-sound';
import {getTotalTimeForMode} from '../utils/utils.ts';

export default function useTimer() {
  const [progress, setProgress] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [timeInSeconds, setTimeInSeconds] = useState(POMODORO_SECONDS);
  const [mode, setMode] = useState<EnumTimerMode>(EnumTimerMode.Pomodoro);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const playerRef = useRef<Sound>();

  useEffect(() => {
    playerRef.current = new Sound(
      require('../assets/sound/sound.mp3'),
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('Failed to load sound', error);
        }
      },
    );
    return () => {
      if (playerRef.current) {
        playerRef.current.release();
      }
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    const totalTime = getTotalTimeForMode(mode);

    if (isTimerRunning && !isTimerPaused) {
      interval = setInterval(() => {
        setTimeInSeconds(prevTime => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setIsTimerRunning(false);
            setIsTimerPaused(false);
            setProgress(0);
            setTimeInSeconds(totalTime);
            if (playerRef.current) {
              playerRef.current.play(() => {
                playerRef.current?.release();
              });
            }
            setIsModalVisible(true);
            return 0;
          }
          setProgress(prevProgress => prevProgress + 100 / totalTime);
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isTimerRunning, isTimerPaused, mode, timeInSeconds]);

  useEffect(() => {
    const totalTime = getTotalTimeForMode(mode);
    setTimeInSeconds(totalTime);
    setProgress(0);
  }, [mode]);

  const handleStop = () => {
    setIsModalVisible(false);
    setProgress(0);
    setIsTimerRunning(false);
    setTimeInSeconds(getTotalTimeForMode(mode));
    if (playerRef.current && playerRef.current.isPlaying()) {
      playerRef.current.stop(() => {
        playerRef.current?.release();
      });
    }
  };

  return {
    progress,
    setProgress,
    isTimerRunning,
    setIsTimerRunning,
    isTimerPaused,
    setIsTimerPaused,
    timeInSeconds,
    setTimeInSeconds,
    mode,
    setMode,
    isModalVisible,
    setIsModalVisible,
    handleStop,
  };
}
