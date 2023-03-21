import {View, SafeAreaView} from 'react-native';
import React, {useEffect,useState} from 'react';
import {Styles} from '../../utility/CommonStyle';
import links from '../../Constants/images';
import {searching} from '../../Hooks/auth';

import {
  Header,
  Backgroundlayout,
  Loader,
  SearchBox,
} from '../../components/index';
import {FeedComponent} from '../../components/FeedComponent';
import {storageKey, storeData, getData} from '../../Hooks/Localauth';

const GlobalHeadline = ({navigation}) => {
  // ----------------------state---------------------------------//
  const [keyword, setkeyword] = useState('');
  const [optionselect, setOptionselect] = useState([]);
  //----------------------useEffect-------------------------------//
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setkeyword('')
    });
    return unsubscribe;
  }, [navigation]);
  // ------------------------Api call-------------------------------//
  
  let {data, isLoading} = searching(keyword);
  // ------------------------function call-------------------------------//

  const clearInput = async val => {
    if (val?.length > 0 || val !== undefined) {
      setkeyword('');
    }
  };
  const Searchfunc = async val => {
    if (val?.length > 0 || val !== undefined) {
      setkeyword(val);
    }
  };
  const handleSelect = async (item, index) => {
    if (optionselect.includes(item)) {
      setOptionselect(optionselect.filter(i => i !== item));
      const bookMarked = JSON.stringify(optionselect.filter(i => i !== item));
      storeData(storageKey.GLOBALBOOKMARK, bookMarked);
    } else {
      setOptionselect([...optionselect, item]);
      const bookMarked = JSON.stringify([...optionselect, item]);
      storeData(storageKey.GLOBALBOOKMARK, bookMarked);
    }
  };
  const handlenext = item => {
    navigation.navigate('Description', {item});
  };
  return (
    <Backgroundlayout>
      <SafeAreaView style={Styles().flex}>
        <Header
          RightIcon
          onpress={() => navigation.navigate('Feeds')}
          heading="Top Global Headlines"
          imglink={links.filter}></Header>
        <Loader loading={isLoading}></Loader>
        <View style={Styles().subcontainer}>
          <SearchBox
            onchangeText={text => {
              setkeyword(text);
              Searchfunc(text);
            }}
           cross
            Value={keyword}
            Press={() => clearInput(keyword)}
            // onpress={() => Searchfunc(keyword)}
          />
        </View>
        {data !== undefined && (
          <FeedComponent
            data={data?.articles}
            onpressbookmark={handleSelect}
            onpressnext={handlenext}
            bookmarkvalue={optionselect}
          />
        )}
      </SafeAreaView>
    </Backgroundlayout>
  );
};
export default GlobalHeadline;
