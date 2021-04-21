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
import {ScaledSheet} from 'react-native-size-matters';
import {defaultColor, fontColor, secondaryColor} from '../../constants/colors';

interface Props {
  children?: string;
  onPress?: () => void;
  title?: boolean;
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  color?: string;
  bold?: boolean;
  center?: boolean;
  underline?: boolean;
}

const TextField: React.FC<Props> = props => {
  const {children, onPress} = props;

  const InsideTextField = () => {
    return <Text style={styles.text(props)}>{children}</Text>;
  };

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <InsideTextField />
      </TouchableOpacity>
    );
  }
  return <InsideTextField />;
};

interface Style {
  text: any;
}

const styles = StyleSheet.create<Style>({
  text: ({
    title,
    large,
    medium,
    small,
    color,
    bold,
    center,
    underline,
  }: Props) => ({
    fontSize: title ? 35 : large ? 30 : medium ? 18 : small ? 5 : 15,
    color: color ?? fontColor,
    fontWeight: bold ? 'bold' : null,
    textAlign: center ? 'center' : null,
    textDecorationLine: underline ? 'underline' : null,
  }),
});

export {TextField};
