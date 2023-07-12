import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

const SearchBox = () => {
  return (
    <View>
      <View style={styles.inputSection}>
        <Image
          style={{marginLeft: 15, height: 30, width: 30}}
          source={require('../assets/search.png')}
        />
        <TextInput style={styles.textInput} placeholder="Search for products" />
        <Image
          style={{marginRight: 10, height: 25, width: 30}}
          source={require('../assets/mic.png')}
        />
        <Image
          style={{marginRight: 20, height: 30, width: 30}}
          source={require('../assets/camera.png')}
        />
      </View>

      <View>
        <Image
          source={require('../assets/headerImg.webp')}
          style={styles.headerImg}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderWidth: 1,
    backgroundColor: '#F0F5FF',
    borderColor: 'violet',
    margin: 11,
    marginBottom: -40,
    borderRadius: 20,
  },
  textInput: {
    height: 40,
    margin: 12,
    flex: 1,
  },
  headerImg: {
    resizeMode: 'contain',
    width: '100%',
    marginBottom: -50,
  },
});

export default SearchBox;
