import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

const SearchBox = () => {
  return (
    <View>
      <View style={styles.inputSection}>
        <Image style={styles.icon} source={require('../assets/search.png')} />

        <TextInput
          style={styles.textInput}
          placeholder="Search for products"
          placeholderTextColor={'black'}
        />

        <Image style={styles.icon} source={require('../assets/mic.png')} />
        <Image style={styles.icon} source={require('../assets/camera.png')} />
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
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  icon: {
    height: 30,
    width: 30,
  },
  textInput: {
    color: 'red',
    flex: 1,
    marginLeft: 10,
  },
});

export default SearchBox;
