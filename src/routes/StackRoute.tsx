import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LoginScreen,
  SignupScreen,
  StartScreen,
  FirstPersonalizationScreen,
} from '../pages';

const Stack = createStackNavigator();

const StackRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen
        name="FirstPersonalizationScreen"
        component={FirstPersonalizationScreen}
      />
    </Stack.Navigator>
  );
};

export {StackRoute};
