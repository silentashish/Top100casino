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

interface Props {
  title?: string;
  image?: ImageSourcePropType;
}

const GameTypeImage: React.FC<Props> = props => {
  const {title, image} = props;
  return (
    <View style={styles.contain()}>
      <Divider large />
      <TextField bold medium>
        {title}
      </TextField>
      <Divider small />
      {image && <Image source={image} style={styles.img} />}
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
    width: '100%',
    height: 170,
    resizeMode: 'contain',
  },
});

export {GameTypeImage};
