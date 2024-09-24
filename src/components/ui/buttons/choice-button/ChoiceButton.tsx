import {Pressable, PressableProps} from 'react-native';
import React from 'react';
import cn from 'clsx';

interface IChoiceButtonProps extends PressableProps {
  selected?: boolean;
}

export default function ChoiceButton({
  className,
  children,
  selected,
  ...rest
}: IChoiceButtonProps) {
  const buttonStyles = () => {
    if (selected) return 'bg-white/50 py-2 px-3 self-start rounded-2xl';
    else return 'bg-white/30 py-2 px-3 self-start rounded-2xl';
  };

  return (
    <Pressable {...rest} className={cn(buttonStyles(), className)}>
      {children}
    </Pressable>
  );
}
