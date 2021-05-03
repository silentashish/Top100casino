import React from 'react';
import {TextStyle, ViewStyle, ImageStyle, Linking} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../constants/colors';
import {Container} from '../../components';
import WebView from 'react-native-webview';

interface props {
  children?: JSX.Element;
  navigation?: any;
}

const AdScreen: React.FC<props> = ({navigation}) => {
  const uri = 'http://sokyp.xyz/carlop.php?para1=media&ads=server&10#/main';
  return (
    <Container header back>
      <WebView
        source={{
          uri,
        }}
        onNavigationStateChange={event => {
          if (event.url !== uri) {
            Linking.openURL(event.url);
          }
        }}
      />
    </Container>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
  lottieWrapper: ViewStyle;
  gridContainer: ViewStyle;
  titleDetails: TextStyle;
  imageStyle: ImageStyle;
  centerItem: ViewStyle;
}

const styles = ScaledSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'space-between',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 52,
    textAlign: 'center',
    color: 'white',
  },
  lottieWrapper: {
    width: '100%',
    height: 500,
  },
  gridContainer: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  titleDetails: {
    color: '#1a1a1a',
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 5,
  },
  imageStyle: {
    width: '100%',
    height: '210@vs',
    resizeMode: 'cover',
    borderBottomLeftRadius: 125,
  },
  centerItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {AdScreen};
