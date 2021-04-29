import React from 'react';
import {ScrollView, TextStyle, View, ViewStyle} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../../constants/colors';
import {Container, Divider, NewsFeedGrid, TextField} from '../../../components';
import {Images} from '../../../assets';

interface props {
  children?: JSX.Element;
  navigation?: any;
}

const NewsFeedScreen: React.FC<props> = () => {
  return (
    <Container header headerTitle="Casino News Feed" center>
      <ScrollView>
        <Divider medium />
        <NewsFeedGrid image={Images.Brand6} name="check" />
        <Divider medium />
        <NewsFeedGrid image={Images.Brand6} name="check" />
        <Divider medium />
        <NewsFeedGrid image={Images.Brand6} name="check" />
        <Divider medium />
        <NewsFeedGrid image={Images.Brand6} name="check" />
        <Divider medium />
        <NewsFeedGrid image={Images.Brand6} name="check" />
        <Divider medium />
      </ScrollView>
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

export {NewsFeedScreen};
