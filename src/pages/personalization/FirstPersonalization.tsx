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
import {ImageGrid} from '../../components/personalization';

interface props {
  children?: JSX.Element;
  navigation?: any;
}

const FirstPersonalizationScreen: React.FC<props> = ({navigation}) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handlePress = (value: number) => {
    setSelected(value);
  };

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
            Choose the field you like to see
          </TextField>
        </View>
        <View style={styles.centerItem}>
          <TextField medium center>
            What is your popular casino game ?
          </TextField>
          <Divider extralarge />
          <Divider extralarge />
          <View style={styles.rowView}>
            <ImageGrid
              source={Images.SlotMachine}
              name="Slot Machine"
              selected={selected === 1}
              onPress={() => handlePress(1)}
            />
            <ImageGrid
              source={Images.Roulette}
              name="Roulette"
              selected={selected === 2}
              onPress={() => handlePress(2)}
            />
            <ImageGrid
              source={Images.Blackjack}
              name="Blackjack"
              selected={selected === 3}
              onPress={() => handlePress(3)}
            />
            <ImageGrid
              source={Images.Poker}
              name="Poker"
              selected={selected === 4}
              onPress={() => handlePress(4)}
            />
          </View>
        </View>
        <View>
          <Button
            small
            onPress={() => navigation.navigate('SecondPersonalizationScreen')}>
            Next
          </Button>
          <Divider />
          <TextField center>1 / 4</TextField>
          <Divider medium />
          <TextField
            medium
            color="blue"
            underline
            right
            maxWidth={'95%'}
            onPress={() => {
              navigation.navigate('MainScreen', {
                screen: 'Game',
                params: {
                  screen: 'GameScreen',
                },
              });
            }}>
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
