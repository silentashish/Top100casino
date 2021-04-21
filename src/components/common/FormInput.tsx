import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-paper';

interface Props {
  mode?: 'flat' | 'outlined';
  label?: string;
  placeholder?: string;
}

const FormInput: React.FC<Props> = props => {
  const {mode, label, placeholder} = props;

  return (
    <View style={styles.wrapperStyle}>
      <TextInput
        mode={mode}
        label={label}
        placeholder={placeholder}
        style={styles.inputStyle}
      />
    </View>
  );
};

interface Style {
  inputStyle: ViewStyle;
  wrapperStyle: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  inputStyle: {},
  wrapperStyle: {
    height: 50,
    width: '95%',
  },
});

export {FormInput};
