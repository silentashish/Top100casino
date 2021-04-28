import React from 'react';
import {
  TextStyle,
  View,
  ViewStyle,
  ImageSourcePropType,
  useWindowDimensions,
  ImageStyle,
  ScrollView,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../../constants/colors';
import {Avatar} from 'react-native-paper';
import {Divider, ReviewGrid, TextField} from '../../../components';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Image from 'react-native-scalable-image';
import {Images} from '../../../assets';
interface props {
  children?: JSX.Element;
  image?: ImageSourcePropType;
  title?: string;
}

const ReadReviewScreen: React.FC<props> = props => {
  const {image, title} = props;
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Divider medium />
        <View style={styles.infoContainer}>
          {image && <Avatar.Image source={image} size={60} />}
          <Divider horizontal large />
          <TextField bold large>
            {title}
          </TextField>
        </View>

        <Divider large />

        <View style={styles.ratingView}>
          <TextField medium>Current Rating 4.9</TextField>
          <Rating ratingCount={4} imageSize={30} />
        </View>

        <Divider extralarge />

        <View style={styles.img}>
          <Image
            source={Images.SlotMachine}
            width={width * 0.9}
            style={styles.imageStyle}
          />
        </View>

        <Divider extralarge />
        <ReviewGrid title={'check'} image={Images.Brand5} name={'User one'} />
        <Divider extralarge />

        <ReviewGrid title={'check'} image={Images.Brand5} name={'User one'} />
        <Divider extralarge />
      </ScrollView>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
  infoContainer: ViewStyle;
  ratingView: ViewStyle;
  imageStyle: ImageStyle;
  img: ViewStyle;
}

const styles = ScaledSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  infoContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 52,
    textAlign: 'center',
    color: 'white',
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  imageStyle: {
    alignSelf: 'center',
  },
  img: {
    width: '90%',
    alignSelf: 'center',
  },
});

export {ReadReviewScreen};
