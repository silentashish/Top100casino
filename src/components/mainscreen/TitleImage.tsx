import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import {Divider, TextField} from '../common';

interface ImageList {
  image: ImageSourcePropType;
}

interface Props {
  title?: string;
  imageArray?: Array<ImageList>;
}

const TitleImage: React.FC<Props> = props => {
  const {title, imageArray} = props;
  return (
    <View style={styles.contain()}>
      <Divider large />
      <TextField bold medium>
        {title}
      </TextField>
      <Divider small />
      <View style={styles.imageContainer}>
        {imageArray &&
          imageArray.map(item => {
            return <Image source={item.image} style={styles.img} />;
          })}
      </View>
    </View>
  );
};

interface Style {
  contain: any;
  imageContainer: ViewStyle;
  img: ImageStyle;
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
    height: 80,
    width: 80,
    marginVertical: 10,
  },
});

export {TitleImage};
