import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from '../utility/CommonStyle';
import {colors, sizes} from '../Constants';
import links from '../Constants/images';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../utility/index';
import {TextComponent} from '../components/index';
import {moderateScale} from 'react-native-size-matters';
export const FeedComponent = ({...props}) => {
  const {data} = props;

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => {
        return (
          <View style={styles.mainview}>
            <ImageBackground
              style={styles.imgbg}
              resizeMode="cover"
              source={links.feed1}>
              <TextComponent
                text={item?.Heading}
                style={[styles.mainheading]}></TextComponent>
            </ImageBackground>
            <TextComponent
              text={item?.description}
              style={[styles.description]}></TextComponent>
            <View style={{flexDirection: 'row', width: wp('85%')}}>
              <View style={{width: wp('50%'), justifyContent: 'center'}}>
                <TextComponent
                  text={item?.name}
                  style={[styles.smalltext]}></TextComponent>
                <TextComponent
                  text={item?.date}
                  style={[styles.smalltext]}></TextComponent>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.buttonview}>
                  <FontAwesome
                    resizeMode="contain"
                    onPress={() => props.onpressbookmark(item.id)}
                    name={item?.isChecked ? 'bookmark' : 'bookmark-o'}
                    color={colors.red}
                    size={wp('8%')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonview}>
                  <FontAwesome
                    resizeMode="contain"
                    name={'share-square-o'}
                    color={colors.red}
                    size={wp('8%')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }}
      ListEmptyComponent={() => (
        <View
          style={[
            {
              paddingVertical: hp('20%'),
              justifyContent: 'flex-end',
            },
          ]}>
          <TextComponent
            style={[
              Styles().cardSubHeading,
              Styles().fontSize16,
              {textAlign: 'center'},
            ]}
            text={'No Message List Found!'}
          />
        </View>
      )}
    />
  );
};
const styles = StyleSheet.create({
  mainheading: {
    color: colors.red,
    fontWeight: 'bold',

    fontSize: moderateScale(20),
  },
  mainview: {
    width: wp('90%'),
    height: hp('40%'),
    borderWidth: 1,
    backgroundColor: colors.offwhite,
    borderColor: colors.white,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: hp('1%'),
    padding: sizes.ss,
  },
  buttonview: {
    backgroundColor: colors.white,
    width: wp('15%'),
    borderRadius: 12,
    padding: sizes.s,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  row: {
    width: wp('35%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    color: colors.black,
    fontSize: moderateScale(15),
  },
  smalltext: {
    color: colors.lightgrey,
    fontSize: moderateScale(13),
  },
  imgbg: {
    height: wp('30%'),
    justifyContent: 'center',
    paddingHorizontal: sizes.s,
    borderRadius: 10,
  },
});
