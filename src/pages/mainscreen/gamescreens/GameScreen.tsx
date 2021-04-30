import React from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../../constants/colors';
import {TitleImage} from '../../../components';
import {Container} from '../../../components/common/Container';
import {popular, trending, newrelease} from '../../../data';

interface props {
  children?: JSX.Element;
  navigation?: any;
}

const GameScreen: React.FC<props> = () => {
  return (
    <Container header headerTitle={'Top 10'} center menu>
      <TitleImage {...trending} />
      <TitleImage {...popular} />
      <TitleImage {...newrelease} />
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

export {GameScreen};
