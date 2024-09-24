import {Pressable, PressableProps} from 'react-native';
import cn from 'clsx';

export default function WhiteButton({
  children,
  className,
  ...rest
}: PressableProps) {
  return (
    <Pressable
      {...rest}
      className={cn(
        'bg-transparent border border-white px-8 py-3 self-start rounded-full flex-row justify-center',
        className,
      )}>
      {children}
    </Pressable>
  );
}
