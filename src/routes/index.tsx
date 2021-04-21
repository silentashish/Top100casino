import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackRoute} from './StackRoute';

export default () => {
  return (
    <NavigationContainer>
      <StackRoute />
    </NavigationContainer>
  );
};
