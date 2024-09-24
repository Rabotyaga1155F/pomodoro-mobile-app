import {ImageBackground, View} from 'react-native';
import ModeChoicer from '../../elements/mode-choicer/ModeChoicer.tsx';
import Timer from '../../elements/timer/Timer.tsx';
import TimerManagement from '../../elements/timer-management/TimerManagement.tsx';
import StopModal from '../../elements/stop-modal/StopModal.tsx';
import useTimer from '../../../hooks/useTimer.ts';

export default function Home() {
  const {
    progress,
    setProgress,
    mode,
    setMode,
    timeInSeconds,
    setTimeInSeconds,
    isTimerPaused,
    setIsTimerPaused,
    isTimerRunning,
    setIsTimerRunning,
    isModalVisible,
    setIsModalVisible,
    handleStop,
  } = useTimer();

  return (
    <View className={'flex-1'}>
      <ImageBackground
        source={require('../../../assets/images/bg.jpg')}
        className={'flex-1'}
        resizeMode={'cover'}>
        <ModeChoicer mode={mode} setMode={setMode} className={'mt-16'} />
        <Timer
          timeInSeconds={timeInSeconds}
          className={'mt-24'}
          progress={progress}
        />
        <TimerManagement
          mode={mode}
          isTimerPaused={isTimerPaused}
          setIsTimerPaused={setIsTimerPaused}
          isTimerRunning={isTimerRunning}
          setIsTimerRunning={setIsTimerRunning}
          setProgress={setProgress}
          setTimeInSeconds={setTimeInSeconds}
        />
        <StopModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          handleStop={handleStop}
        />
      </ImageBackground>
    </View>
  );
}
