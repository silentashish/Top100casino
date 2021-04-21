import React from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  Image,
  ImageStyle,
  Dimensions,
} from 'react-native';
import {TextField} from '../common';

interface Props {
  source?: any;
  name?: string;
}

const ImageGrid: React.FC<Props> = props => {
  const {source, name} = props;

  return (
    <View style={styles.wrapperStyle}>
      <Image source={source} style={styles.imageStyle} />
      <TextField center>{name}</TextField>
    </View>
  );
};

interface Style {
  inputStyle: ViewStyle;
  wrapperStyle: ViewStyle;
  imageStyle: ImageStyle;
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create<Style>({
  inputStyle: {},
  wrapperStyle: {
    height: width * 0.5,
    width: width * 0.4,
    flexDirection: 'column',
  },
  imageStyle: {
    height: width * 0.4,
    width: width * 0.4,
  },
});

export {ImageGrid};
