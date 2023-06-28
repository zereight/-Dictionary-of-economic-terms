import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';

type EconomicTerm = {
  term: string;
  definition: string;
};

const economicTerms: EconomicTerm[] = [
  {
    term: 'Inflation',
    definition:
      'A sustained increase in the general price level of goods and services in an economy over a period of time.',
  },
  {
    term: 'GDP',
    definition:
      'Gross Domestic Product - the total value of goods produced and services provided in a country during one year.',
  },
  {
    term: 'Supply and Demand',
    definition:
      'The theory explaining the interaction between the sellers (supply) and buyers (demand) of a particular resource or product.',
  },
  // Add more economic terms and definitions here
];

const TermsPage = () => {
  const renderTerm: ListRenderItem<EconomicTerm> = ({ item }) => (
    <View style={styles.termContainer}>
      <Text style={styles.term}>{item.term}</Text>
      <Text style={styles.definition}>{item.definition}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'전체 경제용어 90선'}</Text>
      <FlatList
        data={economicTerms}
        renderItem={renderTerm}
        keyExtractor={item => item.term}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  termContainer: {
    marginBottom: 8,
  },
  term: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  definition: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default TermsPage;