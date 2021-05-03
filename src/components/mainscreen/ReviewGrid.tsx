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
  value?: string;
}

const ReviewGrid: React.FC<Props> = props => {
  const {title, image, name, value} = props;
  return (
    <View style={styles.contain()}>
      <View style={styles.ratingView}>
        <View style={styles.row}>
          {image && <Image source={image} style={styles.img} />}
          <Divider horizontal />
          <TextField medium>{title}</TextField>
        </View>
        <Rating ratingCount={4} imageSize={25} />
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
  },
  row: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
});

export {ReviewGrid};
