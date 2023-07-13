import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ProductListHeader = () => {
  const [cartItems, setCartItems] = useState(0);
  const cartData = useSelector(state => state.reducers);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <View style={styles.imgView}>
          <Image style={styles.cart} source={require('../assets/cart.png')} />
          <Text style={{fontSize: 20}}>{cartItems}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    marginTop: 5,
    // backgroundColor: 'gray',
    alignItems: 'flex-end',
    backgroundColor: '#2A55E5',
    paddingRight: 5,
    paddingTop: 2,
  },
  cart: {
    height: 40,
    width: 40,

    borderRadius: 12,
  },
  imgView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default ProductListHeader;
