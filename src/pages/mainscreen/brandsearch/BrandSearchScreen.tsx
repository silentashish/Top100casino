import React, {useEffect, useState} from 'react';
import {ScrollView, TextStyle, View, ViewStyle} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {backgroundColor} from '../../../constants/colors';
import {Divider, TopBrandGrid} from '../../../components';
import {Container} from '../../../components/common/Container';
import {Searchbar} from 'react-native-paper';
import {TopBrandData} from '../../../data';

interface props {
  children?: JSX.Element;
  navigation?: any;
}

const BrandSearchScreen: React.FC<props> = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const [data, setData] = useState(TopBrandData);

  const onChangeSearch = (query: string) => setSearchQuery(query);

  useEffect(() => {
    if (searchQuery) {
      const updateData = TopBrandData.reduce((acc: any, item: any) => {
        if (item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
          return [...acc, item];
        }
        return acc;
      }, []);
      setData(updateData);
    } else {
      setData(TopBrandData);
    }
  }, [searchQuery]);

  return (
    <Container header headerTitle="Top 10" center>
      <View style={styles.searchWrapper}>
        <Divider large />
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Divider />
      </View>
      <View style={styles.container}>
        <ScrollView>
          <Divider large />
          {data.map(item => {
            const {title, image, review} = item;
            return (
              <>
                <TopBrandGrid
                  image={image}
                  name={title}
                  text="Other"
                  search
                  review={review}
                />
                <Divider large />
              </>
            );
          })}
        </ScrollView>
      </View>
    </Container>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
  searchWrapper: ViewStyle;
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
  searchWrapper: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: backgroundColor,
  },
});

export {BrandSearchScreen};
