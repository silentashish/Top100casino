import React from 'react';
import {ScrollView, TextStyle, View, ViewStyle} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../../constants/colors';
import {Divider, TextField, TopBrandGrid} from '../../../components';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Images} from '../../../assets';
import {TopBrandData} from '../../../data';

interface props {
  children?: JSX.Element;
  navigation?: any;
}

const GameRatingScreen: React.FC<props> = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Divider large />
        {TopBrandData.map(item => {
          const {image, title, review} = item;
          return (
            <>
              <TopBrandGrid
                image={image}
                name={title}
                text="Other"
                review={review}
              />
              <Divider large />
            </>
          );
        })}
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
