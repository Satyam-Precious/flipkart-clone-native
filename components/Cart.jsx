import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeItemFromCart} from '../redux/action';
import Header from './Header';

const Cart = ({navigation}) => {
  const [cartItems, setCartItems] = useState(0);

  const dispatch = useDispatch();
  const removeItemHandler = index => {
    dispatch(removeItemFromCart(index));
  };

  const cartData = useSelector(state => state.reducers);

  useEffect(() => {
    setCartItems(cartData);
  }, [cartData]);

  return (
    <View>
      <Header />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Products');
          }}>
          <View style={styles.imgView}>
            <Image style={styles.cart} source={require('../assets/back.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={cartItems}
        style={{padding: 10}}
        renderItem={({item, index}) => (
          <View style={styles.renderView}>
            <Image source={{uri: item.images[0]}} style={styles.img} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.description}</Text>
            <View style={styles.button}>
              <Button
                title="Remove from cart"
                onPress={() => removeItemHandler(index)}
              />
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
  header: {
    width: '100%',
    height: 50,
    marginTop: 5,
    // backgroundColor: 'gray',
    alignItems: 'flex-start',
    backgroundColor: '#2A55E5',
    paddingLeft: 8,
    paddingTop: 4,
  },
  cart: {
    height: 40,
    width: 40,

    borderRadius: 12,
  },
  imgView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default Cart;
