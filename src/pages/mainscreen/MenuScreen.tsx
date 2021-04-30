import React from 'react';
import {
  ImageStyle,
  TextStyle,
  View,
  ViewStyle,
  useWindowDimensions,
  Text,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../constants/colors';
import {Container, Divider, MenuGrid} from '../../components';

interface props {
  children?: JSX.Element;
  navigation?: any;
  title?: string;
  image?: ImageSourcePropType;
  route?: any;
}

const MenuScreen: React.FC<props> = props => {
  const {height, width} = useWindowDimensions();
  return (
    <Container back header headerTitle={'Menu'} center>
      <View style={styles.container}>
        <Divider />
        <MenuGrid>Game Reviews</MenuGrid>
        <Divider />
        <MenuGrid>Find a Casino</MenuGrid>
        <Divider />
        <MenuGrid>Personalized Data</MenuGrid>
        <Divider />
        <MenuGrid>Share a App</MenuGrid>
      </View>
      <View>
        <Divider />
        <MenuGrid to={'LoginScreen'}>Logout</MenuGrid>
        <Divider />
      </View>
    </Container>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
  image: ImageStyle;
  paragraph: TextStyle;
  imageHeader: ViewStyle;
}

const styles = ScaledSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    width: '100%',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 52,
    textAlign: 'center',
    color: 'white',
  },
  image: {
    alignSelf: 'center',
  },
  paragraph: {
    alignSelf: 'center',
    width: '90%',
    textAlign: 'justify',
  },
  imageHeader: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
});

export {MenuScreen};
