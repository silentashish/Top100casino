import React from 'react';
import {ScrollView, TextStyle, View, ViewStyle} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../../constants/colors';
import {Divider, TextField, TopBrandGrid} from '../../../components';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Images} from '../../../assets';

interface props {
  children?: JSX.Element;
  navigation?: any;
}

const GameRatingScreen: React.FC<props> = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Divider large />
        <TopBrandGrid image={Images.Brand1} name="Top Brand" text="Other" />
        <Divider large />
        <TopBrandGrid image={Images.Brand2} name="Top Brand" text="Other" />
        <Divider large />
        <TopBrandGrid image={Images.Brand3} name="Top Brand" text="Other" />
        <Divider large />
        <TopBrandGrid image={Images.Brand4} name="Top Brand" text="Other" />
        <Divider large />
        <TopBrandGrid image={Images.Brand5} name="Top Brand" text="Other" />
        <Divider large />
        <TopBrandGrid image={Images.Brand6} name="Top Brand" text="Other" />
        <Divider large />
        <TopBrandGrid image={Images.Brand7} name="Top Brand" text="Other" />
        <Divider large />
        <TopBrandGrid image={Images.Brand8} name="Top Brand" text="Other" />
        <Divider large />
        <TopBrandGrid image={Images.Brand9} name="Top Brand" text="Other" />
        <Divider large />
        <TopBrandGrid image={Images.Brand10} name="Top Brand" text="Other" />
        <Divider large />
      </ScrollView>
    </View>
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
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 52,
    textAlign: 'center',
    color: 'white',
  },
});

export {GameRatingScreen};
