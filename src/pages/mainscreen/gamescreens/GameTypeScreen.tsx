import React from 'react';
import {ScrollView, TextStyle, View, ViewStyle} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../../constants/colors';

import {Container} from '../../../components/common/Container';
import {GameTypeImages} from '../../../data';
import {GameTypeImage} from '../../../components';

interface props {
  children?: JSX.Element;
  navigation?: any;
}

const GameTypeScreen: React.FC<props> = () => {
  return (
    <Container header headerTitle={'Top 10'} center>
      <ScrollView>
        {GameTypeImages.map(item => {
          return <GameTypeImage {...item} />;
        })}
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

export {GameTypeScreen};
