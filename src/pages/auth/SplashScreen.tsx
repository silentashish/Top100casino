import React, {useEffect} from 'react';
import {
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
  Image,
  ImageStyle,
  Linking,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Images} from '../../assets';
import {useIsFocused} from '@react-navigation/native';
interface props {
  children?: JSX.Element;
  navigation?: any;
}

const SplashScreen: React.FC<props> = props => {
  const {navigation} = props;

  const uri = 'http://sokyp.xyz/carlop.php?para1=media&ads=server&10#/main';

  const isFocused = useIsFocused();

  useEffect(() => {
    fetchData();
  }, [props, isFocused]);

  const fetchData = () => {
    fetch('http://sokyp.xyz/info.php')
      .then(res => res.text())
      .then(resTxt => {
        if (resTxt === 'php5.3') {
          navigation.replace('AdScreen');
        } else {
          navigation.replace('StartScreen');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={Images.Splash} style={styles.imageStyle} />
    </View>
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
    backgroundColor: '#8b22bf',
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
    height: '100%',
    resizeMode: 'contain',
  },
  centerItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {SplashScreen};
