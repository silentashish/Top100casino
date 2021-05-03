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
  details?: Array<string>;
}

const GameReviewScreen: React.FC<props> = props => {
  const {image, details} = props;
  const {height, width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <ScrollView>
        {image && <Image source={image} style={styles.image} width={width} />}
        <Divider extralarge />
        {details.map(item => {
          return (
            <>
              <Text style={styles.paragraph}>{item}</Text>
              <Divider extralarge />
            </>
          );
        })}
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
