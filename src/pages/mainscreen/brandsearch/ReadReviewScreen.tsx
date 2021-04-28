import React from 'react';
import {TextStyle, View, ViewStyle, useWindowDimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../../constants/colors';
import {Container} from '../../../components/common/Container';

interface props {
  children?: JSX.Element;
}

const ReadReviewScreen: React.FC<props> = props => {
  return <Container header headerTitle={'check 2'} back center></Container>;
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

export {ReadReviewScreen};
