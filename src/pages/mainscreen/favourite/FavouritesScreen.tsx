import React, {useState, useEffect} from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../../constants/colors';
import {
  Container,
  NewsFeedGrid,
  NoDataFavourite,
  TextField,
} from '../../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

interface props {
  children?: JSX.Element;
  navigation?: any;
}

const FavouritesScreen: React.FC<props> = () => {
  const [FavList, setFavList] = useState<any>([]);

  const getFavList = async () => {
    const dataList = await AsyncStorage.getItem('favItem');
    if (dataList) {
      setFavList(JSON.parse(dataList));
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getFavList();
    }, []),
  );

  return (
    <Container header headerTitle="Favourite News" center>
      {FavList.length > 0 ? (
        FavList.map((item: any) => {
          return <NewsFeedGrid {...item} active={true} />;
        })
      ) : (
        <NoDataFavourite />
      )}
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

export {FavouritesScreen};
