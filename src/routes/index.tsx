import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackRoute} from './StackRoute';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Linking, Platform} from 'react-native';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

export default () => {
  return (
    <NavigationContainer>
      <StackRoute />
      <Toast ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};
