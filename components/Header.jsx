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
    justifyContent: 'space-around',
  },
  headerButton: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#2A55E5',
    gap: -26,
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    width: 180,
    flexDirection: 'row',
  },
  headerButton2: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'gray',

    gap: -26,
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    width: 180,
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  },
  headerText2: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default Header;
