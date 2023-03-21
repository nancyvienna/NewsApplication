import {SafeAreaView, StyleSheet,Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from '../../utility/CommonStyle';
import links from '../../Constants/images';
import {ref, useSnapshot} from 'valtio';
import auth from '../../State/auth';
import {Header, Backgroundlayout} from '../../components/index';
import {FeedComponent} from '../../components/FeedComponent';
import {bookmarkselect} from '../../State/auth';
import {storageKey, storeData, getData} from '../../Hooks/Localauth';

const Bookmarked = ({navigation, route}) => {

  // ----------------------state---------------------------------//
  const [list, setList] = useState([]);
  const [feedlist, setfeedList] = useState([]);
  // const [globallist, setglobalList] = useState([]);
  // ------------------------useEffect -------------------------------//
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getspeciality();
    });
    return unsubscribe;
  }, [navigation]);
  // ------------------------function call-------------------------------//
  const getspeciality = async () => {
    const topicval = await getData(storageKey.BOOKMARK);
    let _value = JSON.parse(topicval);
    setfeedList(_value);
    const topicval2 = await getData(storageKey.GLOBALBOOKMARK);
    let _valueGLOBAL = JSON.parse(topicval2);
    // setglobalList(_valueGLOBAL);
    const mergedArray = _value?.concat(_valueGLOBAL);
    setList(mergedArray);
  };
  const handleSelect = (itemToDelete, index) => {
    Alert.alert('', 'Are you sure you want to remove from Bookmarks', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () =>bookmarkremove(itemToDelete, index)},
    ]);
    return true;
   
  };
  const bookmarkremove =(itemToDelete, index)=>{
    list.splice(index, 1);
    setfeedList(list.slice(0, feedlist.length));
    // setglobalList(list.slice(feedlist.length));
    const bookMarked = JSON.stringify(list.slice(0, feedlist.length));
    storeData(storageKey.BOOKMARK, bookMarked);
    const globalbookMarked = JSON.stringify(list.slice(feedlist.length));
    storeData(storageKey.GLOBALBOOKMARK, globalbookMarked);
  }
  const handlenext = item => {
    navigation.navigate('Description', {item});
  };

  //------------------------------------------------------------
  return (
    <Backgroundlayout>
      <SafeAreaView style={Styles().flex}>
        <Header
          RightIcon
          onpress={()=>navigation.navigate("Feeds")}

          heading="News Bookmarked"
          imglink={links.filter}></Header>

        <FeedComponent
          data={list ? list : null}
          onpressbookmark={handleSelect}
          onpressnext={handlenext}
          bookmark
          bookmarkvalue={list}
        />
      </SafeAreaView>
    </Backgroundlayout>
  );
};
export default Bookmarked;
const styles = StyleSheet.create({});
