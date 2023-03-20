import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from '../../utility/CommonStyle';
import {colors, sizes} from '../../Constants';
import links from '../../Constants/images';
import {storageKey, storeData, getData} from '../../Hooks/Localauth';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../utility/index';
import {
  Header,
  SearchBox,
  Backgroundlayout,
  TextComponent,
  Buttoncomponent,
  ChecklistComponent,
} from '../../components/index';
import {moderateScale} from 'react-native-size-matters';
import * as Utility from '../../utility/index';
import _ from 'lodash';
const Setting = ({navigation}) => {
  // ----------------------state---------------------------------//
  const [keyword, setkeyword] = React.useState('');
  const [tags, setTags] = React.useState([]);
  const [error, setError] = React.useState(false);
  //-------------------------useEffect-----------------------------------------
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getspeciality();
    });
    return unsubscribe;
  }, [navigation]);

  // ------------------------function call-------------------------------//
  const getspeciality = async () => {
    const topicval = await getData(storageKey.FEEDTOPIC);
    let _value = JSON.parse(topicval);
    setTags(_value);
  };
  const Searchfunc = async val => {
    setError(true);
  };
  const selectItem = keyword => {
    const trimmedKeyword = keyword.trim();
    if (
      trimmedKeyword &&
      (!tags || !tags.some(tag => tag?.name === trimmedKeyword))
    ) {
      setTags([...(tags || []), {name: trimmedKeyword, isSelected: false}]);
      setkeyword('');
    } else {
      setkeyword('');
      const message = 'Already added';
      Utility.showToast({message});
    }
  };
  const Nextfunction = async () => {
    const topic = JSON.stringify(tags);
    storeData(storageKey.FEEDTOPIC, topic);
    navigation.navigate('Feeds');
  };
  const feedfunction = (isSelectedvalue, value) => {
    const updatedValues = tags.map(item =>
      item?.name === value?.name
        ? {...item, isSelected: !item.isSelected}
        : item,
    );
    setTags(updatedValues);
  };
  const removefunc = item => {
    if (tags.includes(item)) {
      setTags(tags.filter(i => i !== item));
      const topic = JSON.stringify(tags.filter(i => i !== item));
      storeData(storageKey.FEEDTOPIC, topic);
    }
  };
  // ---------------------render----------------------------------//
  const renderBrands = ({item, index}) => {
    return (
      <ChecklistComponent
        data={item}
        cross
        index={index}
        Presscross={removefunc}
        isselected={tags}
        setSelectedBrands={feedfunction}></ChecklistComponent>
    );
  };
  // -------------------------------------------------------//

  return (
    <Backgroundlayout>
      <SafeAreaView style={Styles().flex}>
        <Header
          RightIcon
          heading="Setting"
          imglink={links.close}
          onpress={() => navigation.navigate('Feeds')}></Header>
        <ScrollView style={{marginBottom: hp('8%')}}>
          <View style={Styles().subcontainer}>
            <TextComponent
              text={'Add your own custom topic.'}
              style={[styles.text]}></TextComponent>
            <View style={Styles().paddingVerticall}>
              <SearchBox
                onchangeText={text => {
                  setkeyword(text);
                  Searchfunc(text);
                }}
                error={Utility.searchval(keyword)}
                required={Utility.searchval(keyword) && error}
                Value={keyword}
                Press={() => selectItem(keyword)}
                onpress={() => Searchfunc(keyword)}
              />
            </View>
            <TextComponent
              text={'20 characters max.'}
              style={[styles.small]}></TextComponent>
            <TextComponent
              text={'Select topics, for your news feed.'}
              style={[styles.text]}></TextComponent>
            <View style={{}}>
              <FlatList
                columnWrapperStyle={{flexWrap: 'wrap'}}
                data={tags}
                renderItem={renderBrands}
                numColumns={3}
                scrollEnabled={false}
              />
            </View>
          </View>
        </ScrollView>

        <View style={{bottom: 0, position: 'absolute'}}>
          <Buttoncomponent
            buttontext={'Done'}
            style={{fontSize: moderateScale(20)}}
            onpress={() => Nextfunction()}></Buttoncomponent>
        </View>
      </SafeAreaView>
    </Backgroundlayout>
  );
};
export default Setting;
const styles = StyleSheet.create({
  text: {
    color: colors.lightgrey,
    fontSize: moderateScale(18),
    textAlign: 'right',
  },
  small: {
    color: colors.lightgrey,
    fontSize: moderateScale(13),
    textAlign: 'right',
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
