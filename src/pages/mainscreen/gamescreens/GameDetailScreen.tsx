import React from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../../constants/colors';
import {TextField} from '../../../components';

interface props {
  children?: JSX.Element;
  navigation?: any;
}

const GameDetailScreen: React.FC<props> = () => {
  return (
    <View style={styles.container}>
      <TextField>Game Screens Detail</TextField>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
}

const styles = ScaledSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'space-between',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 52,
    textAlign: 'center',
    color: 'white',
  },
});

export {GameDetailScreen};
