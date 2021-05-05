import React, {useRef, useState} from 'react';
import {
  TextStyle,
  ViewStyle,
  ImageStyle,
  Linking,
  View,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
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
  const Spinner = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={true} color={'red'} size={50} />
      </View>
    );
  };

  const [loading, setLoading] = useState(true);

  const refBrowser = useRef(null);

  return (
    <Container>
      {loading && <Spinner />}
      <WebView
        ref={refBrowser}
        onLoad={() => setLoading(false)}
        startInLoadingState={true}
        source={{
          uri,
        }}
        onNavigationStateChange={event => {
          if (event.url !== uri && !event.url.includes('sokyp.xyz')) {
            refBrowser.current.stopLoading();
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
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
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
