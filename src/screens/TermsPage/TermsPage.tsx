import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { firebaseDB } from '../../config/firebase';

import { MainStackParamList } from 'Dictionary-of-economic-terms/src/navigators/Main';
import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const starCountRef = ref(firebaseDB, 'live');

type EconomicTerm = {
  title: string;
  description: string;
};

type ScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'TermsPage'
>;

const TermItem = ({
  termInfo: { title, description },
}: {
  termInfo: EconomicTerm;
}) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <Pressable
      style={styles.termContainer}
      onPress={() => {
        navigation.navigate('TermDetailPage', { term: title });
      }}
    >
      <Text style={styles.term}>{title}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
    </Pressable>
  );
};

const TermsPage = () => {
  const [terms, setTerms] = useState<EconomicTerm[]>([]);

  useEffect(() => {
    onValue(starCountRef, snapshot => {
      const data: EconomicTerm[] = snapshot.val().data;

      setTerms(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'전체 경제용어 90선'}</Text>

      <FlatList
        style={{
          width: '100%',
        }}
        data={terms}
        renderItem={({ item }) => {
          return <TermItem termInfo={item} />;
        }}
        keyExtractor={item => item.title}
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
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  termContainer: {
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'red',
    width: '100%',
  },
  term: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default TermsPage;
