import { RouteProp, useRoute } from '@react-navigation/native';
import { MainStackParamList } from 'Dictionary-of-economic-terms/src/navigators/Main';
import React from 'react';
import { Text, View } from 'react-native';

const TermDetailPage = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'TermDetailPage'>>();

  const { termId } = route.params;

  return (
    <View>
      <Text>{termId}</Text>
    </View>
  );
};

export default TermDetailPage;
