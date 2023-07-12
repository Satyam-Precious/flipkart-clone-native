import {
  View,
  Text,
  SectionList,
  FlatList,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Header';

const ProductList = () => {
  const [data, setData] = useState();

  const getApi = async () => {
    const url = 'https://dummyjson.com/products';
    let result = await fetch(url);
    result = await result.json();
    setData(result.products);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <View>
      <Header />
      <FlatList
        data={data}
        style={{padding: 10}}
        renderItem={({item}) => (
          <View style={styles.renderView}>
            <Image source={{uri: item.images[0]}} style={styles.img} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.description}</Text>
            <View style={styles.button}>
              <Button title="Buy now" color={'green'} />
              <Button title="Add to cart" />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 300,
    width: '100%',
    borderRadius: 10,
  },
  renderView: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    margin: 10,
    padding: 0,
    backgroundColor: 'white',
  },
  text: {
    paddingVertical: 14,
    width: '70%',
    fontWeight: '700',
    textAlign: 'justify',
  },
  title: {
    paddingTop: 10,
  },
  button: {
    flexDirection: 'row',
    gap: 15,
  },
});

export default ProductList;