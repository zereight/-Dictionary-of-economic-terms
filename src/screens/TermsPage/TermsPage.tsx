import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import useFirebaseRealTimeDatabase from '@/hooks/useFirebaseRealTimeDatabase';
import { MainStackParamList } from '@/navigators/Main';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type EconomicTerm = {
  title: string;
  desc: string;
};

type ScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'TermsPage'
>;

const TermItem = ({
  termInfo: { title, desc },
}: {
  termInfo: EconomicTerm;
}) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <TouchableOpacity
      style={styles.termContainer}
      onPress={() => {
        navigation.navigate('TermDetailPage', { term: title, desc });
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={styles.term}>{title}</Text>
        <View style={{ height: 10 }} />
        <Text style={styles.desc} numberOfLines={2}>
          {desc}
        </Text>
      </View>

      <View>
        <Text>{'>'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const TermsPage = () => {
  const [terms, setTerms] = useState<EconomicTerm[]>([]);

  const navigation =
    useNavigation<NavigationProp<MainStackParamList, 'TermsPage'>>();

  const { data } = useFirebaseRealTimeDatabase('');

  useEffect(() => {
    if (!data) {
      return;
    }

    setTerms(Object.values(data.data));
  }, [data]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          width: '100%',
          padding: 16,
        }}
      >
        <Image
          source={require('@/assets/img/back.png')}
          style={{
            tintColor: '#000',
            width: 24,
            height: 24,
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          width: '100%',
        }}
      >
        <Text style={styles.title}>{'김승호 회장\n경제용어 90선'}</Text>

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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  termContainer: {
    marginBottom: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  term: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default TermsPage;
