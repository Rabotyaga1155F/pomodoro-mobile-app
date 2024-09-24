import NeverMindText from '../../ui/fonts/NeverMindText.tsx';
import ChoiceButton from '../../ui/buttons/choice-button/ChoiceButton.tsx';
import {View, ViewProps} from 'react-native';
import cn from 'clsx';
import React, {SetStateAction} from 'react';
import {EnumTimerMode} from '../../../types/base.types.ts';

interface IModeChoicer extends ViewProps {
  mode: EnumTimerMode;
  setMode: React.Dispatch<SetStateAction<EnumTimerMode>>;
}

export default function ModeChoicer({
  mode,
  setMode,
  className,
  ...rest
}: IModeChoicer) {
  return (
    <View {...rest} className={cn('flex-row justify-around', className)}>
      <ChoiceButton
        selected={mode == EnumTimerMode.ShortBreak}
        onPress={() => {
          setMode(EnumTimerMode.ShortBreak);
        }}>
        <NeverMindText className={'text-white/50'}>Short Break</NeverMindText>
      </ChoiceButton>
      <ChoiceButton
        selected={mode == EnumTimerMode.Pomodoro}
        onPress={() => {
          setMode(EnumTimerMode.Pomodoro);
        }}>
        <NeverMindText className={'text-white/50'}>Pomodoro</NeverMindText>
      </ChoiceButton>
      <ChoiceButton
        selected={mode == EnumTimerMode.LongBreak}
        onPress={() => {
          setMode(EnumTimerMode.LongBreak);
        }}>
        <NeverMindText className={'text-white/50'}>Long Break</NeverMindText>
      </ChoiceButton>
    </View>
  );
}
