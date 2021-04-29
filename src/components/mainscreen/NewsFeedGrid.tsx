import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {Divider, TextField} from '../common';

interface Props {
  title?: string;
  image?: ImageSourcePropType;
  name?: string;
}

const NewsFeedGrid: React.FC<Props> = props => {
  const {title, image, name} = props;
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
          <Rating ratingCount={1} imageSize={30} type="heart" />
        </View>
      </View>
      <Divider />
      <TextField>
        Sit commodo Lorem quis ullamco sint. Enim amet amet veniam tempor
        nostrud tempor. Officia fugiat adipisicing deserunt in ad cupidatat
        pariatur. Veniam proident consequat voluptate dolor. Amet officia
        pariatur nisi incididunt non.
      </TextField>
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
