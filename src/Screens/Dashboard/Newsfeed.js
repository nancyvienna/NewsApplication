import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from '../../utility/CommonStyle';
import links from '../../Constants/images';
import {get_feed} from '../../Hooks/auth';
import {
  Header,
  Backgroundlayout,
  Loader,
  ChecklistComponent,
} from '../../components/index';
import {FeedComponent} from '../../components/FeedComponent';
import {storageKey, storeData, getData} from '../../Hooks/Localauth';
const Newsfeed = ({navigation}) => {
  // ----------------------state---------------------------------//
  const [selectedTopic, setSelectedTopic] = React.useState('');
  const [selectedvalue, setselectedvalue] = React.useState('');
  const [specialitylist, setspecialitylist] = useState([]);
  const [optionselect, setOptionselect] = useState([]);
  // ------------------------useEffect -------------------------------//

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getspeciality();
    });
    return unsubscribe;
  }, [navigation]);
  //-----------------------Api call---------------------------//
  let {data, isLoading} = get_feed(selectedvalue);
  // ------------------------function call-------------------------------//
  const getspeciality = async () => {
    const topicval = await getData(storageKey.FAVFEEDTOPIC);
    let _value = JSON.parse(topicval);
    setspecialitylist(_value);
  };

  const handleSelect = async (item, index) => {
    if (optionselect?.includes(item)) {
      setOptionselect(optionselect?.filter(i => i !== item));
      const bookMarked = JSON.stringify(optionselect?.filter(i => i !== item));
      storeData(storageKey.BOOKMARK, bookMarked);
    } else {
      setOptionselect([...optionselect, item]);
      const bookMarked = JSON.stringify([...optionselect, item]);
      storeData(storageKey.BOOKMARK, bookMarked);
    }
  };
  const handlenext = item => {
    navigation.navigate('Description', {item});
  };

  const feedfunction = (index, data) => {
    setselectedvalue(data?.name);
    setSelectedTopic(index + 1);
  };
  // -------------------------------------------------------//

  return (
    <Backgroundlayout>
      <SafeAreaView style={Styles().flex}>
        <Header
          RightIcon
          onpress={() => navigation.navigate('Feeds')}
          heading="My News Feed"
          imglink={links.filter}></Header>
        <Loader loading={isLoading}></Loader>

        {data !== undefined && (
          <>
            <FeedComponent
              data={data?.articles}
              onpressbookmark={handleSelect}
              onpressnext={handlenext}
              bookmarkvalue={optionselect}
            />
            <View style={Styles().subcontainer}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                {specialitylist?.map((item, index) => {
                  const isSelected = selectedTopic == index + 1 ? true : false;
                  return (
                    <ChecklistComponent
                      singleselect
                      data={item}
                      index={index}
                      isselected={isSelected}
                      setSelectedBrands={feedfunction}></ChecklistComponent>
                  );
                })}
              </ScrollView>
            </View>
          </>
        )}
      </SafeAreaView>
    </Backgroundlayout>
  );
};
export default Newsfeed;
