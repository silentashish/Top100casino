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
import {Container, Divider, TextField} from '../../../components';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Images} from '../../../assets';
import Image from 'react-native-scalable-image';
import {Rating, AirbnbRating} from 'react-native-ratings';

interface props {
  children?: JSX.Element;
  navigation?: any;
  title?: string;
  image?: ImageSourcePropType;
  route?: any;
}

const GameInnerScreen: React.FC<props> = props => {
  const {image} = props.route?.params;
  const {height, width} = useWindowDimensions();
  return (
    <Container back header headerTitle={'Game Detail'} center>
      <View style={styles.container}>
        <ScrollView>
          <Divider extralarge />
          <View style={styles.imageHeader}>
            {image && (
              <Image source={image} style={styles.image} width={width * 0.2} />
            )}
            <Rating ratingCount={5} imageSize={25} />
          </View>
          <Divider extralarge />
          <Text style={styles.paragraph}>
            Qui proident reprehenderit enim ut adipisicing magna do incididunt
            irure sit tempor sunt voluptate laborum. Nisi dolore ad id ad veniam
            nostrud nulla duis ex qui tempor. Pariatur esse esse amet quis. Nisi
            irure exercitation cillum exercitation Lorem tempor excepteur
            commodo. Culpa consequat fugiat cupidatat consectetur eiusmod dolor
            culpa aute est ullamco enim velit veniam. Nostrud id aliquip
            excepteur officia duis officia. Labore quis non nisi do nulla et.
            Cillum ullamco magna veniam sit enim laborum non duis cupidatat
            consequat quis. Duis laborum consectetur nulla cupidatat irure ex
            aute Lorem culpa. Consequat ad ea irure reprehenderit. Amet sunt
            magna ad in laborum dolore adipisicing consequat duis deserunt
            laborum. Anim fugiat dolor duis ipsum dolore do dolore. Occaecat
            minim aliqua deserunt cupidatat consectetur. Et pariatur culpa velit
            cupidatat. Adipisicing officia sit officia occaecat anim.
          </Text>
          <Divider extralarge />

          {image && (
            <Image source={image} style={styles.image} width={width * 0.9} />
          )}

          <Divider extralarge />
          <Text style={styles.paragraph}>
            Qui proident reprehenderit enim ut adipisicing magna do incididunt
            irure sit tempor sunt voluptate laborum. Nisi dolore ad id ad veniam
            nostrud nulla duis ex qui tempor. Pariatur esse esse amet quis. Nisi
            irure exercitation cillum exercitation Lorem tempor excepteur
            commodo. Culpa consequat fugiat cupidatat consectetur eiusmod dolor
            culpa aute est ullamco enim velit veniam. Nostrud id aliquip
            excepteur officia duis officia. Labore quis non nisi do nulla et.
            Cillum ullamco magna veniam sit enim laborum non duis cupidatat
            consequat quis. Duis laborum consectetur nulla cupidatat irure ex
            aute Lorem culpa. Consequat ad ea irure reprehenderit. Amet sunt
            magna ad in laborum dolore adipisicing consequat duis deserunt
            laborum. Anim fugiat dolor duis ipsum dolore do dolore. Occaecat
            minim aliqua deserunt cupidatat consectetur. Et pariatur culpa velit
            cupidatat. Adipisicing officia sit officia occaecat anim.
          </Text>
          <Divider extralarge />
        </ScrollView>
      </View>
    </Container>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
  image: ImageStyle;
  paragraph: TextStyle;
  imageHeader: ViewStyle;
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
  imageHeader: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
});

export {GameInnerScreen};
