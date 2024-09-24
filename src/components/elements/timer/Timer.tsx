import React from 'react';
import {Circle, Svg} from 'react-native-svg';
import {StyleSheet, View, ViewProps} from 'react-native';
import NeverMindText from '../../ui/fonts/NeverMindText.tsx';
import cn from 'clsx';
import {formatTime} from '../../../utils/utils.ts';

interface ITimer extends ViewProps {
  progress: number;
  radius?: number;
  strokeWidth?: number;
  timeInSeconds: number;
}

export default function Timer({
  progress,
  radius = 130,
  strokeWidth = 3,
  timeInSeconds,
  className,
  ...rest
}: ITimer) {
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  const size = radius * 2 + strokeWidth * 2;

  return (
    <View
      {...rest}
      className={cn('flex-row justify-center items-center', className)}>
      <Svg width={size} height={size}>
        <Circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          stroke="gray"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={0}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <Circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          stroke="white"
          strokeWidth={strokeWidth}
          strokeLinecap={'round'}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      <View
        className={'justify-center items-center'}
        style={[StyleSheet.absoluteFill]}>
        <NeverMindText
          weight={200}
          className={'text-white text-center text-5xl'}>
          {formatTime(timeInSeconds)}
        </NeverMindText>
      </View>
    </View>
  );
}
