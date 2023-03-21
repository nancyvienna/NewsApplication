import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from '../../utility/CommonStyle';
import {colors} from '../../Constants';
import {storageKey, storeData, getData} from '../../Hooks/Localauth';

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
const Feeds = ({navigation}) => {
  // ----------------------state---------------------------------//
  const [specialitylist, setspecialitylist] = useState([]);
  const [selectedfeed, setSelectedfeed] = React.useState([]);
  //----------------------useeffect------------------------------------//

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

    setspecialitylist(_value);
  };
  const Nextfunction = () => {

    if (selectedfeed?.length !== 0 && specialitylist !==null) {
      const favouritemark = specialitylist?.filter(value => value?.isSelected);
      const selectedtopic = JSON.stringify(favouritemark);
      storeData(storageKey.FAVFEEDTOPIC, selectedtopic);
    } else {
      const selectedtopic = JSON.stringify(selectedfeed);
      storeData(storageKey.FAVFEEDTOPIC, selectedtopic);
    }
    const topic = JSON.stringify(specialitylist);
    storeData(storageKey.FEEDTOPIC, topic);
    navigation.navigate('BottomTab');
  };

  // -------------------------------------------------------//
  const feedfunction = (isSelectedvalue, value) => {
    const updatedValues = specialitylist.map(item =>
      item?.name === value?.name
        ? {...item, isSelected: !item.isSelected}
        : item,
    );
    const favouritemark = updatedValues.filter(value => value.isSelected);

    setspecialitylist(updatedValues);
    setSelectedfeed(favouritemark);
  };
  const renderBrands = ({item, index}) => {
    return (
      <ChecklistComponent
        // selected
        data={item}
        index={index}
        isselected={selectedfeed}
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
            {specialitylist?.length > 0 && (
              <View style={{paddingVertical: 10}}>
                <FlatList
                  data={specialitylist}
                  columnWrapperStyle={{flexWrap: 'wrap'}}
                  renderItem={renderBrands}
                  numColumns={3}
                  scrollEnabled={false}
                />
              </View>
            )}
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
});
