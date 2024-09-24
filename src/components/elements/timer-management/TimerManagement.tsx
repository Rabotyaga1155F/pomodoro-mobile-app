import WhiteButton from '../../ui/buttons/white-button/WhiteButton.tsx';
import NeverMindText from '../../ui/fonts/NeverMindText.tsx';
import TransparentButton from '../../ui/buttons/transparent-button/TransparentButton.tsx';
import {View} from 'react-native';
import React from 'react';
import {getTotalTimeForMode} from '../../../utils/utils.ts';
import {EnumTimerMode} from '../../../types/base.types.ts';

interface ITimerManagementProps {
  isTimerRunning: boolean;
  setIsTimerRunning: React.Dispatch<React.SetStateAction<boolean>>;
  isTimerPaused: boolean;
  setIsTimerPaused: React.Dispatch<React.SetStateAction<boolean>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  setTimeInSeconds: React.Dispatch<React.SetStateAction<number>>;
  mode: EnumTimerMode;
}

export default function TimerManagement({
  isTimerRunning,
  setIsTimerRunning,
  isTimerPaused,
  setIsTimerPaused,
  setTimeInSeconds,
  setProgress,
  mode,
}: ITimerManagementProps) {
  const totalTime = getTotalTimeForMode(mode);
  const handleStartTimer = () => {
    setIsTimerRunning(true);
    setIsTimerPaused(false);
  };

  const handlePauseTimer = () => {
    setIsTimerRunning(false);
    setIsTimerPaused(true);
  };

  const handleResumeTimer = () => {
    setIsTimerRunning(true);
    setIsTimerPaused(false);
  };

  const handleStopTimer = () => {
    setIsTimerRunning(false);
    setIsTimerPaused(false);
    setProgress(0);
    setTimeInSeconds(totalTime);
  };

  return (
    <>
      {!isTimerRunning && !isTimerPaused && (
        <WhiteButton
          className={'z-50 mx-auto mt-20'}
          onPress={handleStartTimer}>
          <NeverMindText weight={500} className={'text-black text-base'}>
            Запуск таймера
          </NeverMindText>
        </WhiteButton>
      )}

      {isTimerRunning && (
        <TransparentButton
          className={'z-50 mx-auto mt-20'}
          onPress={handlePauseTimer}>
          <NeverMindText weight={500} className={'text-white text-base'}>
            Пауза
          </NeverMindText>
        </TransparentButton>
      )}

      {isTimerPaused && !isTimerRunning && (
        <View className={'flex-row z-50 mx-auto mt-20 space-x-4'}>
          <WhiteButton onPress={handleResumeTimer}>
            <NeverMindText weight={500} className={'text-black text-base'}>
              Продолжать
            </NeverMindText>
          </WhiteButton>
          <TransparentButton onPress={handleStopTimer}>
            <NeverMindText weight={500} className={'text-white text-base'}>
              Стоп
            </NeverMindText>
          </TransparentButton>
        </View>
      )}
    </>
  );
}
