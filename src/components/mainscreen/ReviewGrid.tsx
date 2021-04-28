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

const ReviewGrid: React.FC<Props> = props => {
  const {title, image, name} = props;
  return (
    <View style={styles.contain()}>
      <View style={styles.ratingView}>
        <View style={styles.row}>
          {image && <Image source={image} style={styles.img} />}
          <Divider horizontal />
          <TextField medium>{name}</TextField>
        </View>
        <Rating ratingCount={4} imageSize={25} />
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
}

const styles = StyleSheet.create<Style>({
  contain: (center: boolean) => ({
    width: '90%',
    alignSelf: 'center',
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
  },
  row: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
});

export {ReviewGrid};
