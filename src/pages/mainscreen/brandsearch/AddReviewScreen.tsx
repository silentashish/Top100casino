import React from 'react';
import {
  TextStyle,
  View,
  ViewStyle,
  ImageSourcePropType,
  useWindowDimensions,
  ImageStyle,
  ScrollView,
  TextInput,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../../constants/colors';
import {Avatar} from 'react-native-paper';
import {Button, Divider, ReviewGrid, TextField} from '../../../components';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Image from 'react-native-scalable-image';
import {Images} from '../../../assets';
interface props {
  children?: JSX.Element;
  image?: ImageSourcePropType;
  title?: string;
}

const AddReviewScreen: React.FC<props> = props => {
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
          <TextField medium>Your Rating</TextField>
          <Divider />
          <Rating ratingCount={4} imageSize={40} />
        </View>

        <Divider extralarge />

        <View style={styles.img}>
          <TextInput style={styles.inputText} numberOfLines={25} />
        </View>
        <Divider large />
        <Button>Save</Button>
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
  inputText: ViewStyle;
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
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  imageStyle: {
    alignSelf: 'center',
  },
  img: {
    width: '95%',
    alignSelf: 'center',
  },
  inputText: {
    borderRadius: 5,
    borderColor: '#a1a1a1',
    borderWidth: 1.5,
  },
});

export {AddReviewScreen};
