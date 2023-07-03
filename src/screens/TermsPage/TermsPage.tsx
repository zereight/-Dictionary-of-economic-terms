import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from 'Dictionary-of-economic-terms/src/navigators/Main';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

type EconomicTerm = {
  id: number;
  term: string;
  definition: string;
};

const economicTerms: EconomicTerm[] = [
  {
    id: 1,
    term: 'Inflation',
    definition:
      'A sustained increase in the general price level of goods and services in an economy over a period of time.',
  },
  {
    id: 2,
    term: 'GDP',
    definition:
      'Gross Domestic Product - the total value of goods produced and services provided in a country during one year.',
  },
  {
    id: 3,
    term: 'Supply and Demand',
    definition:
      'The theory explaining the interaction between the sellers (supply) and buyers (demand) of a particular resource or product.',
  },
  // Add more economic terms and definitions here
];

type ScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'TermsPage'
>;

const TermItem = ({ term }: { term: EconomicTerm }) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <Pressable
      style={styles.termContainer}
      onPress={() => {
        navigation.navigate('TermDetailPage', { termId: term.id });
      }}
    >
      <Text style={styles.term}>{term.term}</Text>
      <Text style={styles.definition}>{term.definition}</Text>
    </Pressable>
  );
};

const TermsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'전체 경제용어 90선'}</Text>
      <FlatList
        data={economicTerms}
        renderItem={({ item }) => <TermItem term={item} />}
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
