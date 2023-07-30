import React from 'react';
import { Text, View } from 'react-native';

const Brand = () => {
  return (
    <View testID={'brand-img-wrapper'}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        {'부자가 될 준비 되셨나요?'}
      </Text>
    </View>
  );
};

export default Brand;
