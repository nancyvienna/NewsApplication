import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors, sizes} from '../Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../utility/index';

import {moderateScale} from 'react-native-size-matters';
// ------------------------array -------------------------------//
export const ChecklistComponent = ({...props}) => {
  const {data} = props;

  // -------------------------------------------------------//

  return (
    <View>
      {props?.singleselect ? (
        <TouchableOpacity
          onPress={() => {
            props.setSelectedBrands(props?.index, props?.data);
          }}
          style={[
            styles.item,
            props?.isselected && {
              backgroundColor: colors.red,
              flexDirection: 'row',
              alignItems: 'center',
              borderColor: colors.red,
            },
          ]}>
          <Text style={{color: props?.isselected ? 'white' : 'black'}}>
            {data?.name}
          </Text>
          <Ionicons
            name={'checkmark-circle'}
            color={props?.isselected ? colors.white : colors.lightgrey}
            size={wp('7%')}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            if (props?.isselected) {
              props.setSelectedBrands(props?.isselected, props?.index);
            } else {
              props.setSelectedBrands(props?.isselected, props?.index);
            }
          }}
          style={[
            styles.item,
            props?.isselected && {
              backgroundColor: colors.red,
              flexDirection: 'row',
              alignItems: 'center',
              borderColor: colors.red,
            },
          ]}>
          <Text style={{color: props?.isselected ? 'white' : 'black'}}>
            {data?.source?.name}
          </Text>
          <Ionicons
            name={'checkmark-circle'}
            color={props?.isselected ? colors.white : colors.lightgrey}
            size={wp('7%')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainheading: {
    color: colors.red,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: hp('7%'),

    fontSize: moderateScale(25),
  },
  subhead: {
    color: colors.lightgrey,
    textAlign: 'center',

    fontSize: moderateScale(20),
  },

  item: {
    margin: 7,
    borderColor: colors.redish,

    backgroundColor: colors.greybg,
    borderRadius: 50,
    borderWidth: 2,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    backgroundColor: 'red',
    width: wp('100%'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    bottom: 0,
    position: 'absolute',
  },
});
