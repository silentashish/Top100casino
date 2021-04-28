import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import {Avatar, Button} from 'react-native-paper';
import {Divider, TextField} from '../common';

interface Props {
  name?: string;
  text?: string;
  image?: ImageSourcePropType;
  search?: boolean;
}

const TopBrandGrid: React.FC<Props> = props => {
  const {name, text, image, search} = props;
  return (
    <View style={styles.contain()}>
      <View style={styles.leftContainer}>
        {image && <Avatar.Image size={80} source={image} />}
        <Divider horizontal large />
        <View style={styles.txtStyle}>
          <TextField bold medium>
            {name}
          </TextField>
          {!search && (
            <>
              <Divider small />
              <TextField>{text}</TextField>
            </>
          )}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {!search && (
          <Button
            mode="outlined"
            compact
            color={'#a1a1a1'}
            contentStyle={styles.buttonStyle}>
            Read More
          </Button>
        )}
      </View>
    </View>
  );
};

interface Style {
  contain: any;
  imageContainer: ViewStyle;
  img: ImageStyle;
  buttonStyle: ViewStyle;
  txtStyle: ViewStyle;
  buttonContainer: ViewStyle;
  leftContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  contain: (center: boolean) => ({
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  txtStyle: {
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
  },
});

export {TopBrandGrid};
