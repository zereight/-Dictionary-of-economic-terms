import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { storage } from '@/App';
import useGetEconomicTerms, { EconomicTerm } from '@/hooks/useGetEconomicTerms';
import { MainStackParamList } from '@/navigators/Main';
import React, { memo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useMMKVBoolean } from 'react-native-mmkv';
import useSearch from './useSearch';

type ScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'TermsPage'
>;

const TermsPage = () => {
  const flatListRef = useRef<FlatList>(null);

  const navigation =
    useNavigation<NavigationProp<MainStackParamList, 'TermsPage'>>();

  const [searchTerm, setSearchTerm] = useState('');

  const { data, isFetching } = useGetEconomicTerms();
  const { filteredData } = useSearch({
    originalData: data,
    searchTerm,
  });

  const onFlatListLayout = () => {
    if (filteredData.length === 0) {
      return;
    }

    const _notYetViewedTermIndex = filteredData.findIndex(term => {
      return storage.getBoolean(term.title) !== true;
    });

    if (_notYetViewedTermIndex === -1) {
      return;
    }

    flatListRef.current?.scrollToIndex({
      index: _notYetViewedTermIndex,
      animated: true,
    });
  };

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

        <View
          style={{
            position: 'relative',
          }}
        >
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 10,
              padding: 12,
            }}
            placeholder="검색어를 입력하세요"
            onChangeText={text => {
              setSearchTerm(text);
            }}
            value={searchTerm}
          />

          {searchTerm !== '' && (
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 10,
                padding: 6,
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: [{ translateY: -14 }],
              }}
              onPress={() => {
                setSearchTerm('');
              }}
            >
              <Text>{'지우기'}</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={{ height: 16 }} />

        {isFetching ? (
          <ActivityIndicator size="large" color="gray" />
        ) : (
          <FlatList
            removeClippedSubviews={true}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={10}
            getItemLayout={(data, index) => ({
              length: 115, // 항목의 높이 또는 너비
              offset: 115 * index, // 항목의 위치
              index,
            })}
            onLayout={onFlatListLayout}
            ref={flatListRef}
            style={{
              width: '100%',
            }}
            data={filteredData}
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

const TermItem = memo(
  ({ termInfo: { title, desc } }: { termInfo: EconomicTerm }) => {
    const navigation = useNavigation<ScreenNavigationProp>();

    const [isViewed] = useMMKVBoolean(title);

    return (
      <TouchableOpacity
        style={[styles.termContainer, { opacity: isViewed ? 0.5 : 1 }]}
        onPress={() => {
          navigation.navigate('TermDetailPage', { term: title, desc });
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.term}>{title}</Text>
            {isViewed && <Text>{'읽음'}</Text>}
          </View>
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
  },
);
