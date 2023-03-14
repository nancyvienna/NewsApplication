import {Text} from 'react-native';
import React from 'react';

export const TextComponent = ({...props}) => {
  return (
    <Text {...props} allowFontScaling={false} style={[props.style]}>
      {props.text ? props.text : ''}
    </Text>
  );
};
