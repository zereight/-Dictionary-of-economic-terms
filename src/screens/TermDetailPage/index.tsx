import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { MainStackParamList } from 'Dictionary-of-economic-terms/src/navigators/Main';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const TermDetailPage = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'TermDetailPage'>>();

  const navigation =
    useNavigation<NavigationProp<MainStackParamList, 'TermDetailPage'>>();

  const { term, description } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          width: '100%',
          paddingHorizontal: 48,
          paddingTop: 16,
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
          paddingHorizontal: 48,
          paddingVertical: 36,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
          }}
        >
          {term}
        </Text>

        <View style={{ height: 16 }} />

        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            textAlign: 'justify',
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};

export default TermDetailPage;
