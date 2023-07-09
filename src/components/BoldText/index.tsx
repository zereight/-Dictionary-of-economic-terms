import React from 'react';
import { Text, TextProps } from 'react-native';

interface BoldTextProps extends TextProps {
  text: string;
}

const BoldText: React.FC<BoldTextProps> = ({ text, ...restProps }) => {
  // '<b>' 태그를 bold 스타일로 변환
  const formattedText = text.split(/(<b>.*?<\/b>)/g).map((item, index) => {
    if (item.startsWith('<b>') && item.endsWith('</b>')) {
      const innerText = item.replace(/<\/?b>/g, '');

      return (
        <Text key={index} style={{ fontWeight: 'bold' }} {...restProps}>
          {innerText}
        </Text>
      );
    }
    return item;
  });

  return <Text {...restProps}>{formattedText}</Text>;
};

export default BoldText;
