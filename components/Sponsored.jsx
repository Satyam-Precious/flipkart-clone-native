import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';

const cardData = [
  {
    id: '1',
    title: 'Exclusive ',
    description: 'Extra ₹50 Off',
    img: require('../assets/newGel.jpg'),
  },
  {
    id: '2',
    title: 'Sale is live',
    description: 'Spl. price',
    img: require('../assets/himalaya.webp'),
  },
  {
    id: '3',
    title: 'Jaljeera',
    description: 'Spicy apitizer',
    img: require('../assets/JALJEERA.jpg'),
  },
  {
    id: '4',
    title: 'Oranges',
    description: 'Fresh & organic',
    img: require('../assets/orange.jpg'),
  },
  {
    id: '5',
    title: 'Tender Coconut',
    description: 'From South',
    img: require('../assets/tender.jpg'),
  },
  {
    id: '6',
    title: 'Toothpaste',
    description: 'Upto 10% off',
    img: require('../assets/colgate.jpeg'),
  },
];

const Sponsored = () => {
  const firstRowCards = cardData.slice(0, 3);
  const secondRowCards = cardData.slice(3, 6);

  return (
    <View>
      <Text
        style={{
          paddingTop: 20,
          paddingLeft: 20,
          fontSize: 20,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Sponsored
      </Text>
      <View style={styles.container}>
        <View style={styles.row}>
          {firstRowCards.map(card => (
            <Card key={card.id} style={styles.card}>
              <Card.Cover style={styles.cardImg} source={card.img} />
              <Card.Content style={styles.cardContent}>
                <Title style={styles.cardTitle}>{card.title}</Title>
                <Paragraph style={styles.cardDesc}>
                  {card.description}
                </Paragraph>
              </Card.Content>
            </Card>
          ))}
        </View>
        <View style={styles.row}>
          {secondRowCards.map(card => (
            <Card key={card.id} style={styles.card}>
              <Card.Cover style={styles.cardImg} source={card.img} />
              <Card.Content style={styles.cardContent}>
                <Title style={styles.cardTitle}>{card.title}</Title>
                <Paragraph style={styles.cardDesc}>
                  {card.description}
                </Paragraph>
              </Card.Content>
            </Card>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    // flex: 1,
    width: 130,
    marginHorizontal: 4,
    marginBottom: 16,
  },
  cardImg: {
    height: 120,
    width: '100%',
  },
  cardTitle: {
    fontSize: 13,
    lineHeight: 20,
  },
  cardDesc: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  cardContent: {
    alignItems: 'center',
  },
});

export default Sponsored;
