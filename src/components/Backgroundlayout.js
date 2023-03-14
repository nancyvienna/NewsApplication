import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Styles} from '../utility/CommonStyle';

import {moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
export const Backgroundlayout = ({...props}) => {
  return (
    <LinearGradient
      {...props}
      colors={['#D9D6D2', '#8090A6', '#8090A6']}
      style={[props.style, Styles().flex]}></LinearGradient>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(28),
  },
});
