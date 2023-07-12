import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, Image} from 'react-native';

export default function Flatlist() {
  const [data, setData] = useState([]);

  let getData = async () => {
    try {
      const url = 'https://dummyjson.com/products';

      let result = await fetch(url);
      result = await result.json();

      setData(result.products);
    } catch (error) {
      console.log(error.message);
    }
    // console.log(data)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{
        height: 120,
        width: '100%',
      }}>
      <FlatList
        style={{
          backgroundColor: 'white',

          paddingTop: 5,
          paddingBottom: 5,
        }}
        horizontal
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              width: 80,
              height: '100%',
              // backgroundColor:"white",
              marginLeft: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: `${item.images[0]}`}}
              style={{
                width: '100%',
                height: '60%',
                backgroundColor: '#fff',

                resizeMode: 'contain',
              }}
            />

            <Text
              style={{
                fontWeight: 900,
              }}>
              {item.title}
            </Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
