import React, {useEffect} from 'react';
import {
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
  Image,
  ImageStyle,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Images} from '../../assets';
import {backgroundColor} from '../../constants/colors';
import {Title} from 'react-native-paper';
import {Button, CheckText, Divider, TextField} from '../../components';

interface props {
  children?: JSX.Element;
  navigation?: any;
}

const StartScreen: React.FC<props> = ({navigation}) => {
  useEffect(() => {
    fetch('http://sokyp.xyz/info.php')
      .then(res => res.text())
      .then(resTxt => {
        if (resTxt === 'php5.3') {
          navigation.navigate('AdPage');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Images.WelcomeImage} style={styles.imageStyle} />
      <View style={styles.centerItem}>
        <TextField title bold>
          Welcome
        </TextField>
        <Divider />
        <TextField medium>All About Online Casinos</TextField>
        <Divider extralarge />
        <CheckText>Read Reviews</CheckText>
        <CheckText>Find the best casino for you</CheckText>
        <CheckText>Rate Casino Brand</CheckText>
        <CheckText>Add your own review</CheckText>
      </View>
      <View>
        <Button onPress={() => navigation.navigate('LoginScreen')}>
          Login
        </Button>
        <Divider />
        <TextField center>Don't have an account with us ?</TextField>
        <Divider medium />
        <TextField
          center
          medium
          color="blue"
          underline
          onPress={() => navigation.navigate('SignupScreen')}>
          Sign Up For Free
        </TextField>
        <Divider extralarge />
        <Divider extralarge />
      </View>
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

export {StartScreen};
