import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from 'Dictionary-of-economic-terms/src/navigators/Main';

import React from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import WebView from 'react-native-webview';

type ScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const handleGoTermPageButton = () => {
    navigation.navigate('TermsPage');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 16,
        }}
      >
        {'경제용어 100% 학습기'}
      </Text>

      <Text
        style={{
          fontSize: 16,
          marginBottom: 16,
        }}
      >
        {'당신이 경제용어를 반드시 학습해야하는 이유'}
      </Text>

      <WebView
        source={{ uri: 'https://www.youtube.com/embed/mCKxrDQrt7Y' }}
        containerStyle={{ width: '100%', maxHeight: 300, marginBottom: 16 }}
        javaScriptEnabled={true}
        webviewDebuggingEnabled={true}
        originWhitelist={['*']}
        renderLoading={() => <ActivityIndicator size={'large'} style={{}} />}
        startInLoadingState={true}
        mediaPlaybackRequiresUserAction={false}
      />

      <Pressable
        onPress={handleGoTermPageButton}
        style={{
          backgroundColor: '#000',
          padding: 16,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            lineHeight: 16 * 1.3,
          }}
        >
          {'부자 기초체력 키우러 가기'}
        </Text>
      </Pressable>
    </View>
  );
};

export default Home;
