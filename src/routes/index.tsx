import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackRoute} from './StackRoute';
import Toast from 'react-native-toast-message';

export default () => {
  return (
    <NavigationContainer>
      <StackRoute />
      <Toast ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};
