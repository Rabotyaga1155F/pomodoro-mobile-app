import {ComponentType} from 'react';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export type TypeRootStackParamList = {
  Home: undefined;
};

export interface IRoute {
  name: keyof TypeRootStackParamList;
  component: ComponentType;
  options?: NativeStackNavigationOptions;
}
