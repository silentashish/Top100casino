import React from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../../constants/colors';
import {Container, Divider, TextField} from '../../../components';
import {BonusCodeGrid} from '../../../components/mainscreen/BonusCodeGrid';
import {Images} from '../../../assets';

interface props {
  children?: JSX.Element;
  navigation?: any;
}

const BonusTypeScreen: React.FC<props> = () => {
  return (
    <Container header headerTitle="Bonus Codes" center>
      <Divider medium />
      <BonusCodeGrid
        image={Images.Brand6}
        name="Welcome 1"
        title="100% upto $200 welcome bonus"
        info="active for 21:58 PM"
      />
      <Divider medium />
      <BonusCodeGrid
        image={Images.Brand5}
        name="200Free11"
        title="200% upto $400 welcome bonus"
        info="active for 30:58 PM"
      />
      <Divider medium />
      <BonusCodeGrid
        image={Images.Brand7}
        name="XCliv20"
        title="100% upto $100 welcome bonus"
        info="active for 01:58 PM"
      />
      <Divider medium />
    </Container>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
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
});

export {BonusTypeScreen};
