import React from 'react';
import {TextStyle, View, ViewStyle, useWindowDimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../../constants/colors';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Container} from '../../../components/common/Container';
import {AddReviewScreen} from './AddReviewScreen';
import {ReadReviewScreen} from './ReadReviewScreen';

interface props {
  children?: JSX.Element;
  navigation?: any;
  route?: any;
}

const BrandDetailsScreen: React.FC<props> = props => {
  const {title, image} = props.route.params;
  const layout = useWindowDimensions();

  const renderScene = SceneMap({
    second: () => <AddReviewScreen title={title} image={image} />,
    first: () => <ReadReviewScreen title={title} image={image} />,
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Read Review'},
    {key: 'second', title: 'Add Review'},
  ]);

  return (
    <Container header headerTitle={title} back center>
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

export {BrandDetailsScreen};
