import React from 'react';
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
import {ImageGrid} from '../../components/personalization';

interface props {
  children?: JSX.Element;
  navigation?: any;
}

const FirstPersonalizationScreen: React.FC<props> = ({navigation}) => {
  return (
    <>
      <Header back={false} center>
        TOP10 Casinos
      </Header>
      <View style={styles.container}>
        <View>
          <Divider extralarge />
          <TextField title center bold>
            Get Personalized
          </TextField>
          <TextField medium center>
            Choose the fied you like to see
          </TextField>
        </View>
        <View style={styles.centerItem}>
          <TextField medium center>
            Describe your gaming skills
          </TextField>
          <Divider extralarge />
          <Divider extralarge />
          <View style={styles.rowView}>
            <ImageGrid source={Images.Beginner} name="Beginner" />
            <ImageGrid source={Images.Intermediate} name="Intermediate" />
            <ImageGrid source={Images.Professional} name="Professional" />
            <ImageGrid source={Images.VIP} name="VIP" />
          </View>
        </View>
        <View>
          <Divider />
          <TextField center>Don't have an account with us ?</TextField>
          <Divider medium />
          <TextField
            medium
            color="blue"
            underline
            onPress={() => navigation.navigate('SignupScreen')}>
            Skip
          </TextField>
          <Divider />
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
  rowView: ViewStyle;
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
  rowView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export {FirstPersonalizationScreen};
