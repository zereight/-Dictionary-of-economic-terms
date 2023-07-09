import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { MainStackParamList } from '@/navigators/Main';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import BoldText from '@/components/BoldText';

const TermDetailPage = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'TermDetailPage'>>();

  const navigation =
    useNavigation<NavigationProp<MainStackParamList, 'TermDetailPage'>>();

  const { term, desc } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          width: '100%',
          paddingHorizontal: 48,
          paddingVertical: 16,
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
          borderWidth: 1,
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
