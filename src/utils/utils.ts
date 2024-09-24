import {EnumTimerMode} from '../types/base.types.ts';
import {
  LONG_BREAK_SECONDS,
  POMODORO_SECONDS,
  SHORT_BREAK_SECONDS,
} from '../constants/base.constants.ts';

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

export const getTotalTimeForMode = (mode: EnumTimerMode) => {
  switch (mode) {
    case EnumTimerMode.ShortBreak:
      return SHORT_BREAK_SECONDS;
    case EnumTimerMode.LongBreak:
      return LONG_BREAK_SECONDS;
    case EnumTimerMode.Pomodoro:
    default:
      return POMODORO_SECONDS;
  }
};
