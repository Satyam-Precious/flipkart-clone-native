import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import UpperHeader from './UpperHeader';

const Header = () => {
  return (
    <View>
      <View style={styles.headerView}>
        <UpperHeader />
        <TouchableOpacity style={styles.headerButton}>
          <Image
            style={styles.icon}
            source={require('../assets/flipkart-icon.png')}
          />
          <Text style={styles.headerText}>Flipkart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton2}>
          <Image
            style={styles.icon}
            source={require('../assets/flipkart-icon.png')}
          />
          <Text style={styles.headerText2}>Grocery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headerButton: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#2A55E5',
    gap: -10,
    borderRadius: 8,
    padding: 5,
    marginTop: 5,
    width: 130,
    flexDirection: 'row',
  },
  headerButton2: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'gray',

    gap: -5,
    borderRadius: 8,
    padding: 8,
    marginTop: 5,
    width: 130,
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  headerText2: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default Header;
