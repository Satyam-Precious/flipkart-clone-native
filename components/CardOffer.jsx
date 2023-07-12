import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';

const CardOffer = () => {
  const [data, setData] = useState(undefined);

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
    <View style={styles.container}>
      <FlatList
        style={styles.row}
        horizontal
        data={data}
        renderItem={({item}) => (
          <Card key={item.id} style={styles.card}>
            <Card.Cover style={styles.cardImg} source={{uri: item.images[0]}} />
            <Card.Content style={styles.cardContent}>
              <Title style={styles.cardTitle}>{item.title}</Title>
              <Paragraph style={styles.cardDesc} numberOfLines={3}>
                {item.description}
              </Paragraph>
            </Card.Content>
          </Card>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.cardList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  cardList: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  card: {
    marginHorizontal: 10,
    justifyContent: 'center',
    marginTop: 10,
    height: '20%',
    width: 200,
  },
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImg: {
    height: 130,
    width: '100%',
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 14,
  },
  cardDesc: {
    fontWeight: 'bold',
  },
  cardContent: {
    alignItems: 'center',
  },
});

export default CardOffer;
