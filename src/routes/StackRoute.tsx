import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import {
  LoginScreen,
  SignupScreen,
  StartScreen,
  FirstPersonalizationScreen,
  SecondPersonalizationScreen,
  ThirdPersonalizationScreen,
  FourthPersonalizationScreen,
  GameScreen,
  GameDetailScreen,
  BrandSearchScreen,
  BrandDetailsScreen,
  GameTypeScreen,
  GameInnerScreen,
  MenuScreen,
} from '../pages';
import {TabRoute} from './TabRoute';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const StackRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainScreen" component={TabRoute} />
      <Stack.Screen name="GameInnerScreen" component={GameInnerScreen} />
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          title: 'MenuScreen',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen
        name="FirstPersonalizationScreen"
        component={FirstPersonalizationScreen}
      />
      <Stack.Screen
        name="SecondPersonalizationScreen"
        component={SecondPersonalizationScreen}
      />
      <Stack.Screen
        name="ThirdPersonalizationScreen"
        component={ThirdPersonalizationScreen}
      />
      <Stack.Screen
        name="FourthPersonalizationScreen"
        component={FourthPersonalizationScreen}
      />
    </Stack.Navigator>
  );
};

const GameScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="GameScreen" component={GameScreen} />
      <Stack.Screen name="GameTypeScreen" component={GameTypeScreen} />
      <Stack.Screen name="GameDetailScreen" component={GameDetailScreen} />
    </Stack.Navigator>
  );
};

const BrandSearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BrandSearchScreen" component={BrandSearchScreen} />
      <Stack.Screen name="BrandDetailsScreen" component={BrandDetailsScreen} />
    </Stack.Navigator>
  );
};

export {StackRoute, GameScreenStack, BrandSearchStack};
