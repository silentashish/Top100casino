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
import {Avatar} from 'react-native-paper';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {Divider, TextField} from '../common';
import {useNavigation} from '@react-navigation/native';

interface Props {
  children?: string;
  to?: string;
}

const MenuGrid: React.FC<Props> = props => {
  const {children, to} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.contain()}
      onPress={() => to && navigation.navigate(to)}>
      <View style={styles.ratingView}>
        <View style={styles.row}>
          <TextField medium bold>
            {children}
          </TextField>
        </View>
      </View>
      <Divider />
    </TouchableOpacity>
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

export {MenuGrid};
