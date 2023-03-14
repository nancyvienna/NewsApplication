import {
  View,
  ScrollView,
  SafeAreaView,
  BackHandle,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from '../../utility/CommonStyle';
import {colors, sizes} from '../../Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import links from '../../Constants/images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
} from '../../components/index';
import {moderateScale} from 'react-native-size-matters';
import * as Utility from '../../utility/index';

const Setting = ({navigation, route}) => {
  // ------------------------array -------------------------------//

  // ----------------------state---------------------------------//
  const [keyword, setkeyword] = useState('');
  const [selectedBrands, setSelectedBrands] = React.useState([]);
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(false);
console.log(error)
  console.log(selectedBrands);
  // ------------------------function call-------------------------------//

  const Searchfunc = async val => {
    setError(true);
    // if (val?.length > 0 || val !== undefined) {
    // }
  };
  const selectItem = keyword => {
 
    if (keyword?.length > 0 ) {
    setTags([...tags, {name: keyword}]);
    setkeyword('');
    }
  };
  const Nextfunction = () => {};
  // -------------------------------------------------------//
  const renderBrands = ({item, index}) => {
    console.log(item, index);
    const isSelected = selectedBrands.filter(i => i === index).length > 0;

    return (
      <TouchableOpacity
        onPress={() => {
          if (isSelected) {
            setSelectedBrands(prev => prev.filter(i => i !== index));
          } else {
            setSelectedBrands(prev => [...prev, index]);
          }
        }}
        style={[
          styles.item,
          isSelected && {
            backgroundColor: colors.red,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: colors.red,
          },
        ]}>
        <Text style={{color: isSelected ? 'white' : 'black'}}>{item.name}</Text>
        <Ionicons
          name={'checkmark-circle'}
          color={isSelected ? colors.white : colors.lightgrey}
          size={wp('7%')}
        />
      </TouchableOpacity>
    );
  };
  // -------------------------------------------------------//

  return (
    <Backgroundlayout>
      <SafeAreaView style={Styles().flex}>
        <Header RightIcon heading="Setting" imglink={links.close}></Header>
        <ScrollView  style={{marginBottom:hp("8%")}}>
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
