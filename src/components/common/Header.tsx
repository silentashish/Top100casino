import React from 'react';
import {View, Text, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

interface Props {
  children?: string;
  back?: boolean;
  center?: boolean;
}

const Header: React.FC<Props> = ({children, back, center}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {back && (
        <Icon
          name="chevron-left"
          color="black"
          size={25}
          onPress={() => navigation.goBack()}
        />
      )}
      <View style={styles.contain(center)}>
        <Text style={styles.text(center)}>{children}</Text>
      </View>
    </View>
  );
};

interface Style {
  contain: any;
  text: any;
  container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10,
    elevation: 5,
  },
  contain: (center: boolean) => ({
    width: '100%',
    paddingLeft: '4%',
    alignSelf: 'center',
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: center ? 'center' : null,
  }),
  text: (center: boolean) => ({
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    textAlign: center ? 'center' : null,
  }),
});

export {Header};
