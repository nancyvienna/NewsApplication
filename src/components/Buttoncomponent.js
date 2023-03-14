import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, sizes} from '../../src/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from 'react-native-size-matters';
import {TextComponent} from '../components/index';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../utility/index';
export const Buttoncomponent = ({...props}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.tab}
        onPress={props.onpress}>
        <Ionicons
          name={'checkmark-circle-outline'}
          color={colors.white}
          size={wp('8%')}
          style={{padding: 10}}
        />
        <TextComponent
          {...props}
          text={props.buttontext}
          style={[
            props.style,
            styles.subhead,
            {color: colors.white, textAlign: 'center'},
          ]}></TextComponent>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  tab: {
    backgroundColor: 'red',
    width: wp('100%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    // padding: 3,
    height:hp("7%")
  },
});
