import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Header from './Header';
import SearchBox from './SearchBox';
import CategoryList from './CategoryList';
import CardOffer from './CardOffer';
import TopSelection from './TopSelection';
import Sponsored from './Sponsored';
import HeaderImg from './HeaderImg';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <SearchBox />
        <HeaderImg />
        <CategoryList />
        <CardOffer />
        <TopSelection />
        <Sponsored />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
