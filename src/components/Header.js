import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../utility/index';
import {colors, sizes} from '../Constants';
import links from '../Constants/images';
import LinearGradient from 'react-native-linear-gradient';

import {TextComponent} from '../components/index';
import {moderateScale} from 'react-native-size-matters';
export const Header = props => {
  const {title, RightIcon, back} = props;
  return (
    <View>
      <View style={[styles.mainhead]}>
        <View style={{flex: 1}}>
          {props.back && (
            <MaterialIcons
              style={{}}
              name="arrow-back-ios"
              size={wp('6%')}
              color={'black'}
            />
          )}
        </View>
        <TextComponent
          text={props.heading}
          style={[styles.Text, {color: 'red'}]}></TextComponent>
        <TouchableOpacity
          style={{flex: 1, alignItems: 'flex-end'}}
          onPress={props.onpress}>
          {props.RightIcon && (
            <LinearGradient
              colors={['#F20505', '#F20505', '#BF212E']}
              style={styles.bg}>
              <Image
                resizeMode="contain"
                source={props.imglink}
                style={styles.filter}
              />
            </LinearGradient>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Text: {
    fontSize: moderateScale(20),

    alignSelf: 'center',
    justifyContent: 'center',
  },
  filter: {
    width: wp('8%'),
    height: wp('6%'),
    tintColor: colors.white,
  },
  mainhead: {
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: sizes.xl,
  },
  bg: {
    backgroundColor: 'red',
    borderRadius: 100,
    width: wp('11%'),
    height: wp('11%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
