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
import {Divider, TextField} from '../common';

interface Props {
  title?: string;
  name?: string;
  info?: string;
  image?: ImageSourcePropType;
}

const BonusCodeGrid: React.FC<Props> = props => {
  const {title, image, name, info} = props;
  return (
    <View style={styles.contain()}>
      <View style={styles.row}>
        {image && <Avatar.Image source={image} size={80} />}
        <Divider horizontal small />
        <View style={styles.infoContainer}>
          <TextField medium>{title}</TextField>
          <Divider />
          <View style={styles.ratingView}>
            <View style={styles.txtBox}>
              <TextField color="blue" underline>
                Read Brand Review
              </TextField>
            </View>
            <View>
              <TextField title bold>
                {name}
              </TextField>
              <TextField color="#a1a1a1">{info}</TextField>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

interface Style {
  contain: any;
  imageContainer: ViewStyle;
  img: ImageStyle;
  ratingView: ViewStyle;
  row: ViewStyle;
  timeHeart: ViewStyle;
  infoContainer: ViewStyle;
  txtBox: ViewStyle;
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
    alignItems: 'center',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeHeart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  txtBox: {
    justifyContent: 'flex-end',
    flex: 1,
    height: '100%',
  },
});

export {BonusCodeGrid};
