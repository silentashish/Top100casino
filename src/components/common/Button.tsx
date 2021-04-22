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
import {
  defaultColor,
  fontColor,
  secondaryColor,
  whiteColor,
} from '../../constants/colors';

interface Props {
  children?: string;
  onPress?: () => void;
  loading?: boolean;
  small?: boolean;
}

const Button: React.FC<Props> = ({children, onPress, loading, small}) => {
  return (
    <TouchableOpacity
      style={styles.contain(small)}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" size={25} />
      ) : (
        <Text style={styles.text}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

interface Style {
  contain: any;
  text: TextStyle;
}

const styles = StyleSheet.create<Style>({
  contain: (small: boolean) => ({
    width: small ? '40%' : '95%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: defaultColor,
    padding: small ? 5 : 10,
    borderRadius: 5,
  }),
  text: {
    fontSize: 22,
    color: whiteColor,
    fontWeight: 'bold',
  },
});

export {Button};
