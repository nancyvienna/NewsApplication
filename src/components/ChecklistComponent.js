import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors, sizes} from '../Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../utility/index';

import {moderateScale} from 'react-native-size-matters';
// ------------------------array -------------------------------//
export const ChecklistComponent = ({...props}) => {
  const {data,isselected} = props;
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
          {data?.value?.name?data?.value?.name:data?.name}
          </Text>
          <Ionicons
            name={'checkmark-circle'}
            color={props?.isselected ? colors.white : colors.lightgrey}
            size={wp('7%')}
          />
        </TouchableOpacity>
      ) :
      
      
      
      (
        <View
         
          style={[
            styles.item,
            data?.isSelected  && {
              backgroundColor: colors.red,
              flexDirection: 'row',
              alignItems: 'center',
              borderColor: colors.red,
            },
          ]}>
          <Text style={{color: data?.isSelected ? 'white' : 'black'}}>
            {data?.value?.name?data?.value?.name:data?.name}
          </Text>
          <Ionicons
           onPress={() => {
            if (data.isSelected ) {
              props.setSelectedBrands(data?.isSelected , data);
            } else {
              props.setSelectedBrands(data?.isSelected , data);
            }
          }}
            name={'checkmark-circle'}
            color={data?.isSelected ? colors.white : colors.lightgrey}
            size={wp('7%')}
          />
          {props.cross&&
          <Entypo
          name={'circle-with-cross'}
          onPress={()=>props.Presscross(props?.data)}
          color={data?.isSelected  ? colors.white : colors.red}  
          size={wp('7%')}
        />
        }
        </View>
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
