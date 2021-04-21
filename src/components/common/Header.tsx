import React from 'react';
import {View, Text, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

interface Props {
  children?: string;
  back?: boolean;
}

const Header: React.FC<Props> = ({children, back}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.contain}>
      {back && (
        <Icon
          name="chevron-left"
          color="black"
          size={25}
          style={{marginRight: 20}}
          onPress={() => navigation.goBack()}
        />
      )}
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

interface Style {
  contain: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Style>({
  contain: {
    width: '100%',
    paddingLeft: '4%',
    alignSelf: 'center',
    padding: 10,
    paddingVertical: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },
  text: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
});

export {Header};
