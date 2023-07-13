import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';

const cardData = [
  {
    id: '1',
    title: 'DSLR',
    description: 'Special Offer',
    img: require('../assets/dslr.jpeg'),
  },
  {
    id: '2',
    title: 'Mobiles',
    description: 'Best Deals',
    img: require('../assets/mobile.jpeg'),
  },
  {
    id: '3',
    title: 'Face Wash',
    description: 'Best Picks',
    img: require('../assets/facewash.jpeg'),
  },
  {
    id: '4',
    title: 'Glue Guns',
    description: 'Trending',
    img: require('../assets/gluegun.jpeg'),
  },
];

const TopSelection = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        source={require('../assets/TopSelection.jpeg')}
        style={styles.img}>
        <Text style={styles.text}>Top Selection</Text>
        <View style={styles.row}>
          {cardData.map((card, index) => (
            <View
              key={card.id}
              style={
                index % 2 === 0
                  ? styles.cardContainer
                  : styles.cardContainerLast
              }>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Products');
                }}>
                <Card style={styles.card}>
                  <Card.Cover style={styles.cardImg} source={card.img} />
                  <Card.Content style={styles.cardContent}>
                    <Title style={styles.cardTitle}>{card.title}</Title>
                    <Paragraph style={styles.cardDesc}>
                      {card.description}
                    </Paragraph>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    marginTop: 20,
    height: '200',
    width: '100%',
  },
  text: {
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#000',
    fontSize: 20,
    marginTop: 20,
    paddingLeft: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  cardContainer: {
    width: '50%',
    height: 200,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  cardContainerLast: {
    width: '50%',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  card: {
    width: '100%',
    borderRadius: 8,
  },
  cardImg: {
    height: 200,
  },
  cardContent: {
    padding: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDesc: {
    fontSize: 14,
  },
});

export default TopSelection;
