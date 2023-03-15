import {
  View,
  ScrollView,
  SafeAreaView,
  BackHandle,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from '../../utility/CommonStyle';
import {colors, sizes} from '../../Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {get_feed} from '../../Hooks/auth';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../utility/index';
import {
  TextComponent,
  Backgroundlayout,
  Buttoncomponent,
  ChecklistComponent,
} from '../../components/index';
import {moderateScale} from 'react-native-size-matters';
var isSelected = '';
const Feeds = ({navigation, route}) => {
  const feedData = get_feed();
  const [articles, setArticles] = useState('');

  useEffect(() => {
    if (feedData != null) {
      if (feedData.data != null) {
        setArticles(feedData?.data);
      }
    }
  }, [feedData.data]);

  //--------------------Aicall-------------------//

  // ----------------------state---------------------------------//
  const [selectedfeed, setSelectedfeed] = React.useState([]);

  // ------------------------function call-------------------------------//
  const Nextfunction = () => {
    navigation.navigate('BottomTab');
  };

  // -------------------------------------------------------//
  const feedfunction = (isSelectedvalue, index, item) => {
    if (isSelectedvalue) {
      setSelectedfeed(prev => prev.filter(i => i !== index));
    } else {
      setSelectedfeed(prev => [...prev, index]);
    }
  };
  const renderBrands = ({item, index}) => {
    const isSelected = selectedfeed.filter(i => i === index).length > 0;
    return (
      <ChecklistComponent
        data={item}
        index={index}
        isselected={isSelected}
        setSelectedBrands={feedfunction}></ChecklistComponent>
    );
  };
  // -------------------------------------------------------//

  return (
    <Backgroundlayout>
      <SafeAreaView style={Styles().flex}>
        <ScrollView style={{marginBottom: hp('8%')}}>
          <View style={Styles().subcontainer}>
            <TextComponent
              text="Include Topics For Your News Feed."
              style={[styles.mainheading]}></TextComponent>
            <TextComponent
              text="You will see news based on topics you select, and you can change these anytime."
              style={[styles.subhead, {marginTop: hp('4%')}]}></TextComponent>
            {/* {articles?.articles?.length > 0 && ( */}
              <View style={{paddingVertical: 10}}>
                <FlatList
                  data={articles.articles}
                  columnWrapperStyle={{flexWrap: 'wrap'}}
                  renderItem={renderBrands}
                  numColumns={3}
                  scrollEnabled={false}
                />
              </View>
            {/* )} */}
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
export default Feeds;
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
