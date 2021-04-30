import React, {useState, useEffect} from 'react';
import {ScrollView, TextStyle, View, ViewStyle} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../../constants/colors';
import {Container, Divider, NewsFeedGrid, TextField} from '../../../components';
import {Images} from '../../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface props {
  children?: JSX.Element;
  navigation?: any;
}

const NewsData = [
  {
    image: Images.Brand6,
    name: 'check',
    id: 1,
  },
  {
    image: Images.Brand6,
    name: 'check',
    id: 2,
  },
  {
    image: Images.Brand6,
    name: 'check',
    id: 3,
  },
  {
    image: Images.Brand6,
    name: 'check',
    id: 4,
  },
  {
    image: Images.Brand6,
    name: 'check',
    id: 5,
  },
  {
    image: Images.Brand6,
    name: 'check',
    id: 6,
  },
  {
    image: Images.Brand6,
    name: 'check',
    id: 7,
  },
];

const NewsFeedScreen: React.FC<props> = () => {
  const [FavList, setFavList] = useState<any>([]);

  const getMap = () => {
    let value = FavList.reduce((acc: any, item: any) => {
      return [...acc, item.id];
    }, []);
    return new Set(value);
  };

  const mapList: any = React.useMemo(() => {
    return getMap();
  }, [FavList]);

  const getFavList = async () => {
    const dataList = await AsyncStorage.getItem('favItem');
    if (dataList) {
      setFavList(JSON.parse(dataList));
    }
  };

  useEffect(() => {
    getFavList();
  }, []);

  const AddToFav = async (items: any) => {
    let favList = FavList;
    const oldData = FavList.reduce((acc: any, item: any) => {
      if (acc) {
        return acc;
      }
      if (item.id === items.id) {
        return true;
      }
      return acc;
    }, false);
    if (oldData) {
      favList = FavList.filter((item: any) => item.id !== items.id);
    } else {
      favList = [...favList, items];
    }
    setFavList(favList);
    AsyncStorage.setItem('favItem', JSON.stringify(favList));
  };

  return (
    <Container header headerTitle="Casino News Feed" center>
      <ScrollView>
        <Divider medium />
        {NewsData.map(item => {
          return (
            <>
              <NewsFeedGrid
                {...item}
                onPress={() => AddToFav(item)}
                active={mapList?.has(item.id)}
              />
              <Divider medium />
            </>
          );
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

export {NewsFeedScreen};
