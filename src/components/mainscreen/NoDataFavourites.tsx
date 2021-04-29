import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ViewStyle,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';
import {Divider, TextField} from '../common';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {defaultColor} from '../../constants/colors';

interface Props {}

const NoDataFavourite: React.FC<Props> = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.contain}>
      <View style={styles.txtStyle}>
        <TextField center>You still don't have favourite</TextField>
        <Divider small />
        <TextField center>
          Go to the newsfeed and add your favourite news
        </TextField>
        <Divider extralarge />
        <TouchableOpacity style={styles.addFav}>
          <Icon name="plus" color={'#fff'} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

interface Style {
  contain: any;
  imageContainer: ViewStyle;
  img: ImageStyle;
  addFav: ViewStyle;
  txtStyle: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  contain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  img: {
    width: '100%',
    height: 170,
    resizeMode: 'contain',
  },
  addFav: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: defaultColor,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  txtStyle: {
    alignItems: 'center',
  },
});

export {NoDataFavourite};
