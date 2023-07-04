import { RouteProp, useRoute } from '@react-navigation/native';
import { MainStackParamList } from 'Dictionary-of-economic-terms/src/navigators/Main';
import React from 'react';
import { Text, View } from 'react-native';

const TermDetailPage = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'TermDetailPage'>>();

  const { term, description } = route.params;

  return (
    <View
      style={{
        flex: 1,
        padding: 48,
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
  );
};

export default TermDetailPage;
