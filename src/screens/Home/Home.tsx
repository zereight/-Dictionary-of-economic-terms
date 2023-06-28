import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from 'MyEconoDict/src/navigators/Main';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

type ScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const handleGoTermPageButton = () => {
    navigation.navigate('TermPage');
  };

  return (
    <View>
      <Pressable onPress={handleGoTermPageButton}>
        <Text>안녕</Text>
      </Pressable>
    </View>
  );
};

export default Home;
