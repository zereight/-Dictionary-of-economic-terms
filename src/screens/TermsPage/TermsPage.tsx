import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import useGetEconomicTerms, { EconomicTerm } from '@/hooks/useGetEconomicTerms';
import { MainStackParamList } from '@/navigators/Main';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type ScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'TermsPage'
>;

const TermsPage = () => {
  const navigation =
    useNavigation<NavigationProp<MainStackParamList, 'TermsPage'>>();

  const { data, isFetching } = useGetEconomicTerms();

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
        <Text style={styles.title}>{'김승호 회장\n경제용어 96선'}</Text>

        <View style={{ height: 16 }} />

        {isFetching ? (
          <ActivityIndicator size="large" color="gray" />
        ) : (
          <FlatList
            style={{
              width: '100%',
            }}
            data={data}
            renderItem={({ item }) => {
              return <TermItem termInfo={item} />;
            }}
            keyExtractor={item => item.title}
            ItemSeparatorComponent={() => {
              return <View style={{ height: 8 }} />;
            }}
          />
        )}
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

      <Image
        source={require('@/assets/img/back.png')}
        style={{
          tintColor: '#000',
          width: 16,
          height: 16,
          transform: [{ rotate: '180deg' }],
          marginLeft: 8,
        }}
      />
    </TouchableOpacity>
  );
};
