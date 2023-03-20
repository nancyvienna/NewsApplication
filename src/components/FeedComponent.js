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
import moment from 'moment';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../utility/index';
import {TextComponent} from '../components/index';
import {moderateScale} from 'react-native-size-matters';
export const FeedComponent = ({...props}) => {

  const {data,bookmarkvalue,bookmark} = props;
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => {
        // console.log(bookmarkvalue?.includes(item),"++++")
        return (
          <View style={styles.mainview}>
            <ImageBackground
              style={styles.imgbg}
              resizeMode="cover"
              source={links.feed1}>
              <TextComponent
                NumberOfLines={2}
                text={item?.title}
                style={[styles.mainheading]}></TextComponent>
            </ImageBackground>
            <TextComponent
              NumberOfLines={6}
              text={item?.description}
              style={[styles.description]}></TextComponent>
            <View style={{flexDirection: 'row', width: wp('85%')}}>
              <View style={{width: wp('50%'), justifyContent: 'center'}}>
                {item?.source?.name && (
                  <TextComponent
                    text={'source :' + item?.source?.name}
                    style={[styles.smalltext]}></TextComponent>
                )}
                <TextComponent
                  text={moment(item?.publishedAt).format('YYYY-MM-DD')}
                  style={[styles.smalltext]}></TextComponent>
              </View>
              <View style={styles.row}>
                <TouchableOpacity style={styles.buttonview}  activeOpacity={0.5}  onPress={() => props.onpressbookmark(item,index)}>
                  <FontAwesome
                    resizeMode="contain"
                 
                    name={bookmarkvalue?.includes(item)||props.bookmark ? 'bookmark' : 'bookmark-o'}
                    color={colors.red}
                    size={wp('8%')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonview}  activeOpacity={0.5} onPress={() => props.onpressnext(item)}>
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
        <View style={styles.mainview1}>
          <TextComponent
            style={[
              Styles().cardSubHeading,
              Styles().fontSize16,
              {textAlign: 'center'},
            ]}
            text={'Data Not Found!'}
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
  mainview1: {
    height: hp('75%'),
    backgroundColor: 'transparent',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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
    height: hp('15%'),
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
