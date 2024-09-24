import {Modal, ModalProps, Pressable, View} from 'react-native';
import NeverMindText from '../../ui/fonts/NeverMindText.tsx';
import React, {SetStateAction} from 'react';

interface IStopModalProps extends ModalProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<SetStateAction<boolean>>;
  handleStop: () => void;
}
export default function StopModal({
  handleStop,
  isModalVisible,
  setIsModalVisible,
  ...rest
}: IStopModalProps) {
  return (
    <Modal
      {...rest}
      transparent={true}
      animationType="slide"
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}>
      <View className={'flex-1 justify-center items-center bg-transparent'}>
        <View className={'w-72 p-4 bg-white rounded-xl items-center'}>
          <NeverMindText className={'text-xl font-bold'}>
            Time's up!
          </NeverMindText>
          <NeverMindText className={'text-xm mt-2.5'}>
            Таймер окончен!
          </NeverMindText>
          <Pressable
            onPress={handleStop}
            className={'mt-4 bg-gray-700 py-2.5 px-5 rounded-full'}>
            <NeverMindText className={'text-white font-bold'}>
              Стоп
            </NeverMindText>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
