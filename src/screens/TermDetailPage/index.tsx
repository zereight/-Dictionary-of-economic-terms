import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { MainStackParamList } from '@/navigators/Main';
import React, { useEffect } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BoldText from '@/components/BoldText';
import useViewedTerms from '@/hooks/useViewedTerms';
import { useMMKVBoolean } from 'react-native-mmkv';

const TermDetailPage = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'TermDetailPage'>>();

  const navigation =
    useNavigation<NavigationProp<MainStackParamList, 'TermDetailPage'>>();

  const { term, desc } = route.params;

  const { addViewedTerm, removeViewedTerm } = useViewedTerms();

  const [isViewed] = useMMKVBoolean(term);

  useEffect(() => {
    addViewedTerm(term);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          width: '100%',
          paddingHorizontal: 48,
          paddingVertical: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
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

        {isViewed && (
          <TouchableOpacity
            onPress={() => {
              removeViewedTerm(term);
              Alert.alert('읽음취소', '읽음취소되었습니다.');
            }}
          >
            <Text>{'읽음취소'}</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>

      <View
        style={{
          paddingHorizontal: 48,
          paddingVertical: 12,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {term}
        </Text>
      </View>
      <View style={{ height: 16 }} />

      <ScrollView
        contentContainerStyle={{}}
        contentInset={{ top: 0, bottom: 120 }}
        style={{
          flex: 1,
          paddingHorizontal: 48,
          paddingVertical: 36,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            textAlign: 'justify',
          }}
        >
          <BoldText text={desc.replace(/\\n/g, '\n')} />
        </Text>
      </ScrollView>
    </View>
  );
};

export default TermDetailPage;
