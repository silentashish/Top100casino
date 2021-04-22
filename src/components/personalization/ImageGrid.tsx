import React from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  Image,
  ImageStyle,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  alternativeColor,
  defaultColor,
  secondaryColor,
} from '../../constants/colors';
import {TextField} from '../common';

interface Props {
  source?: any;
  name?: string;
  onPress?: () => void;
  selected?: boolean;
}

const ImageGrid: React.FC<Props> = props => {
  const {source, name, onPress, selected} = props;

  return (
    <TouchableOpacity style={styles.wrapperStyle} onPress={onPress}>
      <Image source={source} style={styles.imageStyle(selected)} />
      <TextField center>{name}</TextField>
    </TouchableOpacity>
  );
};

interface Style {
  inputStyle: ViewStyle;
  wrapperStyle: ViewStyle;
  imageStyle: any;
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create<Style>({
  inputStyle: {},
  wrapperStyle: {
    height: width * 0.5,
    width: width * 0.4,
    flexDirection: 'column',
  },
  imageStyle: (selected: boolean) => ({
    height: width * 0.4,
    width: width * 0.4,
    borderWidth: selected ? 5 : null,
    borderColor: selected ? defaultColor : null,
  }),
});

export {ImageGrid};
