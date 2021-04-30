import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {backgroundColor} from '../constants/colors';
import {BrandSearchStack, GameScreenStack} from './StackRoute';
import {BonusTypeScreen, FavouritesScreen, NewsFeedScreen} from '../pages';
import {Images} from '../assets';
import {Avatar} from 'react-native-paper';
interface props {
  children?: JSX.Element;
}

const Tab = createBottomTabNavigator();

const TabRoute: React.FC<props> = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = Images.FavIcon;

            if (route.name === 'Game') {
              iconName = Images.GameIcon;
            } else if (route.name === 'Brand') {
              iconName = Images.BrandIcon;
            } else if (route.name === 'NewsFeed') {
              iconName = Images.NewsFeedIcon;
            } else if (route.name === 'BonusType') {
              iconName = Images.BonusIcon;
            } else if (route.name === 'Favourite') {
              iconName = Images.FavIcon;
            }

            // You can return any component that you like here!
            return <Avatar.Image size={focused ? 35 : 25} source={iconName} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Game"
          component={GameScreenStack}
          listeners={({navigation}) => ({
            tabPress: e => {
              // Prevent default action
              e.preventDefault();

              // Do something with the `navigation` object
              navigation.navigate('GameTypeScreen'); // Here!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            },
          })}
        />
        <Tab.Screen name="Brand" component={BrandSearchStack} />
        <Tab.Screen name="NewsFeed" component={NewsFeedScreen} />
        <Tab.Screen name="BonusType" component={BonusTypeScreen} />
        <Tab.Screen name="Favourite" component={FavouritesScreen} />
      </Tab.Navigator>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
  lottieWrapper: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'space-around',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 52,
    textAlign: 'center',
    color: 'white',
  },
  lottieWrapper: {
    width: '100%',
    height: 500,
  },
});

export {TabRoute};
