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

interface Props {
  title?: string;
  image?: ImageSourcePropType;
}

const GameTypeImage: React.FC<Props> = props => {
  const {title, image} = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.contain()}
      onPress={() => navigation.navigate('GameDetailScreen', {title, image})}>
      <Divider large />
      <TextField bold medium>
        {title}
      </TextField>
      <Divider small />
      {image && <Image source={image} style={styles.img} />}
    </TouchableOpacity>
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
