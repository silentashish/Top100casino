import React, {useState} from 'react';
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
import {TextInput, Title} from 'react-native-paper';
import {
  Button,
  CheckText,
  Divider,
  FormInput,
  Header,
  TextField,
} from '../../components';
import {showToast} from '../../utils/Toast';

interface props {
  children?: JSX.Element;
  navigation?: any;
}

const LoginScreen: React.FC<props> = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginHandlers = () => {
    if (username === '' && password === '') {
      showToast('Error!', 'Please Enter username and password', false);
      return;
    }
    if (!(password.length > 5)) {
      showToast('Error!', 'Password must be more than 6', false);
      return;
    }
    navigation.navigate('FirstPersonalizationScreen');
  };

  return (
    <>
      <Header back></Header>
      <View style={styles.container}>
        <View>
          <Divider extralarge />
          <Divider extralarge />
          <TextField bold title center>
            LOGIN
          </TextField>
        </View>
        <View style={styles.centerItem}>
          <FormInput
            mode={'outlined'}
            label="Username"
            placeholder="Enter Username"
            onChangeText={val => setUsername(val.replace(/[0-9]/g, ''))}
            value={username}
          />
          <Divider extralarge />
          <Divider />
          <FormInput
            mode={'outlined'}
            label="Password"
            placeholder="Enter Password"
            onChangeText={val => setPassword(val)}
            value={password}
          />
          <Divider extralarge />
          <Divider extralarge />
          <Button onPress={loginHandlers}>Login</Button>
        </View>
        <View>
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
    </>
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

export {LoginScreen};
