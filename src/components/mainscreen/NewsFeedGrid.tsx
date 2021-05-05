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
import {Avatar} from 'react-native-paper';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {Divider, TextField} from '../common';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props {
  title?: string;
  image?: ImageSourcePropType;
  name?: string;
  id?: number;
  onPress?: () => void;
  active?: boolean;
  value?: string;
}

const NewsFeedGrid: React.FC<Props> = props => {
  const {title, image, name, onPress, active, value} = props;

  return (
    <View style={styles.contain()}>
      <View style={styles.ratingView}>
        <View style={styles.row}>
          {image && <Avatar.Image source={image} size={50} />}
          <Divider horizontal />
          <TextField medium bold>
            {name}
          </TextField>
        </View>
        <View style={styles.timeHeart}>
          <TextField small>Just Now</TextField>
          <Divider horizontal />
          <TouchableOpacity onPress={onPress}>
            <Icon
              name={active ? 'heart-sharp' : 'heart-outline'}
              size={25}
              color={'red'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Divider />
      <TextField>{value}</TextField>
    </View>
  );
};

interface Style {
  contain: any;
  imageContainer: ViewStyle;
  img: ImageStyle;
  ratingView: ViewStyle;
  row: ViewStyle;
  timeHeart: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  contain: (center: boolean) => ({
    width: '95%',
    padding: 15,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: 'white',
    marginVertical: 2,
  }),
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  img: {
    height: 45,
    width: 45,
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeHeart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {NewsFeedGrid};
