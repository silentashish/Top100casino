import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import {defaultColor, fontColor, secondaryColor} from '../../constants/colors';
import {Checkbox} from 'react-native-paper';
import {TextField} from '../common';

interface Props {
  children?: string;
  onPress?: () => void;
  loading?: boolean;
}

const CheckText: React.FC<Props> = ({children, onPress, loading}) => {
  return (
    <View style={styles.contain}>
      <Checkbox status={'checked'} onPress={() => {}} />
      <TextField>{children}</TextField>
    </View>
  );
};

interface Style {
  contain: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Style>({
  contain: {
    width: '50%',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 22,
    color: fontColor,
    fontWeight: 'bold',
  },
});

export {CheckText};
