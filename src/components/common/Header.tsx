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
    <View style={styles.contain(center)}>
      {back && (
        <Icon
          name="chevron-left"
          color="black"
          size={25}
          style={{marginRight: 20}}
          onPress={() => navigation.goBack()}
        />
      )}
      <Text style={styles.text(center)}>{children}</Text>
    </View>
  );
};

interface Style {
  contain: any;
  text: any;
}

const styles = StyleSheet.create<Style>({
  contain: (center: boolean) => ({
    width: '100%',
    paddingLeft: '4%',
    alignSelf: 'center',
    padding: 10,
    paddingVertical: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
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
