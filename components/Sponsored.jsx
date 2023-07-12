import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';

const cardData = [
  {id: '1', title: 'Exclusive Offer', description: 'Extra ₹50 Off'},
  {id: '2', title: 'Sale is live', description: 'Spl. price'},
  {id: '3', title: 'Shower Gels', description: 'Upto 50% off'},
  {id: '4', title: 'Shower Gels', description: 'Upto 50% off'},
  {id: '5', title: 'Shower Gels', description: 'Upto 50% off'},
  {id: '6', title: 'Shower Gels', description: 'Upto 50% off'},
];

const Sponsored = () => {
  const firstRowCards = cardData.slice(0, 3);
  const secondRowCards = cardData.slice(3, 6);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text></Text>
        {firstRowCards.map(card => (
          <Card key={card.id} style={styles.card}>
            <Card.Cover
              style={styles.cardImg}
              source={require('../assets/headerImg.webp')}
            />
            <Card.Content style={styles.cardContent}>
              <Title style={styles.cardTitle}>{card.title}</Title>
              <Paragraph style={styles.cardDesc}>{card.description}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </View>
      <View style={styles.row}>
        {secondRowCards.map(card => (
          <Card key={card.id} style={styles.card}>
            <Card.Cover
              style={styles.cardImg}
              source={require('../assets/headerImg.webp')}
            />
            <Card.Content style={styles.cardContent}>
              <Title style={styles.cardTitle}>{card.title}</Title>
              <Paragraph style={styles.cardDesc}>{card.description}</Paragraph>
            </Card.Content>
          </Card>
        ))}
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
    width: '30%',
    marginHorizontal: 4,
    marginBottom: 16,
  },
  cardImg: {
    height: 120,
    width: '100%',
  },
  cardTitle: {
    fontSize: 14,
  },
  cardDesc: {
    fontWeight: 'bold',
  },
  cardContent: {
    alignItems: 'center',
  },
});

export default Sponsored;
