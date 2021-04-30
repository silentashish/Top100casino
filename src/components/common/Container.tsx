import React from 'react';
import {View, Text, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {backgroundColor} from '../../constants/colors';
import {Header} from './Header';

interface Props {
  children?: React.ReactNode;
  header?: boolean;
  headerTitle?: string;
  back?: boolean;
  center?: boolean;
  menu?: boolean;
}

const Container: React.FC<Props> = props => {
  const {children, header, headerTitle} = props;

  return (
    <View style={styles.contain()}>
      {header && <Header {...props}>{headerTitle}</Header>}
      {children}
    </View>
  );
};

interface Style {
  contain: any;
}

const styles = StyleSheet.create<Style>({
  contain: (center: boolean) => ({
    flex: 1,
    backgroundColor: backgroundColor,
  }),
});

export {Container};
