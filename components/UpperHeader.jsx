import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const UpperHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Image
          style={styles.headerImg}
          source={require('../assets/menu.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: 40,
    // marginTop: 20,
    justifyContent: 'center',
  },
  headerImg: {
    height: 20,
    width: '100%',
  },
});

export default UpperHeader;
