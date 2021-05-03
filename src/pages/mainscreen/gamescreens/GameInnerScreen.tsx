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
  const {image, title, details} = props.route?.params;
  const {height, width} = useWindowDimensions();
  return (
    <Container back header headerTitle={title} center>
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
          <Text style={styles.paragraph}>{details[0]}</Text>
          <Divider extralarge />

          {details?.map((item, index) => {
            return (
              <>
                <Text style={styles.paragraph}>{item}</Text>
                {index === 0 && image && (
                  <>
                    <Divider extralarge />
                    <Image
                      source={image}
                      style={styles.image}
                      width={width * 0.9}
                    />
                  </>
                )}
                <Divider extralarge />
              </>
            );
          })}
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
