import React from 'react';
import {
  ImageStyle,
  TextStyle,
  View,
  ViewStyle,
  useWindowDimensions,
  Text,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../../constants/colors';
import {Divider, TextField} from '../../../components';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Images} from '../../../assets';
import Image from 'react-native-scalable-image';

interface props {
  children?: JSX.Element;
  navigation?: any;
  title?: string;
  image?: ImageSourcePropType;
}

const GameReviewScreen: React.FC<props> = props => {
  const {image} = props;
  const {height, width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <ScrollView>
        {image && <Image source={image} style={styles.image} width={width} />}
        <Divider extralarge />
        <Text style={styles.paragraph}>
          Qui proident reprehenderit enim ut adipisicing magna do incididunt
          irure sit tempor sunt voluptate laborum. Nisi dolore ad id ad veniam
          nostrud nulla duis ex qui tempor. Pariatur esse esse amet quis. Nisi
          irure exercitation cillum exercitation Lorem tempor excepteur commodo.
          Culpa consequat fugiat cupidatat consectetur eiusmod dolor culpa aute
          est ullamco enim velit veniam. Nostrud id aliquip excepteur officia
          duis officia. Labore quis non nisi do nulla et. Cillum ullamco magna
          veniam sit enim laborum non duis cupidatat consequat quis. Duis
          laborum consectetur nulla cupidatat irure ex aute Lorem culpa.
          Consequat ad ea irure reprehenderit. Amet sunt magna ad in laborum
          dolore adipisicing consequat duis deserunt laborum. Anim fugiat dolor
          duis ipsum dolore do dolore. Occaecat minim aliqua deserunt cupidatat
          consectetur. Et pariatur culpa velit cupidatat. Adipisicing officia
          sit officia occaecat anim.
        </Text>
        <Divider extralarge />
        <Text style={styles.paragraph}>
          Qui proident reprehenderit enim ut adipisicing magna do incididunt
          irure sit tempor sunt voluptate laborum. Nisi dolore ad id ad veniam
          nostrud nulla duis ex qui tempor. Pariatur esse esse amet quis. Nisi
          irure exercitation cillum exercitation Lorem tempor excepteur commodo.
          Culpa consequat fugiat cupidatat consectetur eiusmod dolor culpa aute
          est ullamco enim velit veniam. Nostrud id aliquip excepteur officia
          duis officia. Labore quis non nisi do nulla et. Cillum ullamco magna
          veniam sit enim laborum non duis cupidatat consequat quis. Duis
          laborum consectetur nulla cupidatat irure ex aute Lorem culpa.
          Consequat ad ea irure reprehenderit. Amet sunt magna ad in laborum
          dolore adipisicing consequat duis deserunt laborum. Anim fugiat dolor
          duis ipsum dolore do dolore. Occaecat minim aliqua deserunt cupidatat
          consectetur. Et pariatur culpa velit cupidatat. Adipisicing officia
          sit officia occaecat anim.
        </Text>
        <Divider extralarge />
      </ScrollView>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
  image: ImageStyle;
  paragraph: TextStyle;
}

const styles = ScaledSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    width: '100%',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 52,
    textAlign: 'center',
    color: 'white',
  },
  image: {
    alignSelf: 'center',
  },
  paragraph: {
    alignSelf: 'center',
    width: '90%',
    textAlign: 'justify',
  },
});

export {GameReviewScreen};
