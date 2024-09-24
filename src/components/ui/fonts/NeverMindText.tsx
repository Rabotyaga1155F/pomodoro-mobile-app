import {Animated, TextProps} from 'react-native';
import React from 'react';
import Text = Animated.Text;

type TypeTextWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;

type TypeTextNeverMind =
  | 'NeverMindCompact-Thin'
  | 'NeverMindCompact-ExtraLight'
  | 'NeverMindCompact-Light'
  | 'NeverMindCompact-Regular'
  | 'NeverMindCompact-Medium'
  | 'NeverMindCompact-DemiBold'
  | 'NeverMindCompact-Bold'
  | 'NeverMindCompact-Extrabold';

interface INeverMindTextProps extends TextProps {
  weight?: TypeTextWeight;
}

export default function NeverMindText({
  children,
  weight = 400,
  style,
  className,
  ...rest
}: INeverMindTextProps) {
  const font: Record<TypeTextWeight, TypeTextNeverMind> = {
    '100': 'NeverMindCompact-Thin',
    '200': 'NeverMindCompact-ExtraLight',
    '300': 'NeverMindCompact-Light',
    '400': 'NeverMindCompact-Regular',
    '500': 'NeverMindCompact-Medium',
    '600': 'NeverMindCompact-DemiBold',
    '700': 'NeverMindCompact-Bold',
    '800': 'NeverMindCompact-Extrabold',
  };

  return (
    <Text {...rest} style={[{fontFamily: font[weight]}, style]}>
      {children}
    </Text>
  );
}
