import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'SuperCoin',
    img: require('../assets/superCoin.webp'),
  },
  {
    id: '2',
    title: 'Plus',
    img: require('../assets/plus.png'),
  },
  {
    id: '3',
    title: 'NextGen Brands',
    img: require('../assets/NextGen.png'),
  },
  {
    id: '4',
    title: 'Money+',
    img: require('../assets/Money.png'),
  },
  {
    id: '5',
    title: 'LiveShop+',
    img: require('../assets/LiveStudio.png'),
  },
  {
    id: '6',
    title: 'Game Zone',
    img: require('../assets/gameZone.png'),
  },
];

const CategoryList = () => {
  return (
    <FlatList
      horizontal
      data={DATA}
      renderItem={({item}) => (
        <View key={item.id} style={styles.list}>
          <View style={styles.bgCircle}>
            <Image source={item.img} style={{height: 30, width: 30}} />
          </View>
          <Text> {item.title} </Text>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  bgCircle: {
    height: 70,
    width: 70,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#EEEEEE',
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CategoryList;
