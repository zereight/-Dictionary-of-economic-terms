import { RouteProp, useRoute } from '@react-navigation/native';
import { MainStackParamList } from 'Dictionary-of-economic-terms/src/navigators/Main';
import React from 'react';
import { Text, View } from 'react-native';

const TermDetailPage = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'TermDetailPage'>>();

  const { term } = route.params;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text>{term}</Text>
    </View>
  );
};

export default TermDetailPage;
