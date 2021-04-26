import React from 'react';
import {TextStyle, View, ViewStyle, useWindowDimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../../constants/colors';
import {TextField} from '../../../components';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {GameRatingScreen} from './GameRatingScreen';
import {GameReviewScreen} from './GameReviewScreen';
import {Container} from '../../../components/common/Container';

interface props {
  children?: JSX.Element;
  navigation?: any;
}

const renderScene = SceneMap({
  first: GameReviewScreen,
  second: GameRatingScreen,
});

const GameDetailScreen: React.FC<props> = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Game Review'},
    {key: 'second', title: 'Top Brands'},
  ]);
  return (
    <Container header headerTitle="Top 10" back center>
      <TabView
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: 'white'}}
            style={{backgroundColor: '#a1a1a1'}}
          />
        )}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
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

export {GameDetailScreen};
