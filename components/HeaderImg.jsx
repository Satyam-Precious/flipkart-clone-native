import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const HeaderImg = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 200,
      }}>
      <Image
        source={require('../assets/headerImg.webp')}
        style={styles.headerImg}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerImg: {
    width: '100%',
    height: '100%',
    // resizeMode: 'contain',
  },
});

export default HeaderImg;
