import {View, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from '../../utility/CommonStyle';
import links from '../../Constants/images';

import {
  Header,
  Backgroundlayout,
  Buttoncomponent,
  SearchBox,
} from '../../components/index';
import {FeedComponent} from '../../components/FeedComponent';
const GlobalHeadline = ({navigation, route}) => {
  // ------------------------array -------------------------------//
  const Feeds = [
    {
      description:
        'India’s most populous state Uttar Pradesh, currently ruled by Prime Minister Narendra Modi’s Bharatiya Janata Party, will hold a state election in seven phases starting from Feb. 10, Chief Election Commissioner Sushil Chandra said on Saturday. ',
      Heading:
        'Winning chances since 2004: 18% for tainted candidates, 11% for clean',
      name: 'Source: The Indian Express',
      date: 'Jan 12, 2022',
      id: 1,
    },
    {
      description:
        'India’s most populous state Uttar Pradesh, currently ruled by Prime Minister Narendra Modi’s Bharatiya Janata Party, will hold a state election in seven phases starting from Feb. 10, Chief Election Commissioner Sushil Chandra said on Saturday. ',
      Heading:
        'Winning chances since 2004: 18% for tainted candidates, 11% for clean',
      name: 'Source: The Indian Express',
      date: 'Jan 12, 2022',

      id: 2,
    },
    {
      description:
        'India’s most populous state Uttar Pradesh, currently ruled by Prime Minister Narendra Modi’s Bharatiya Janata Party, will hold a state election in seven phases starting from Feb. 10, Chief Election Commissioner Sushil Chandra said on Saturday. ',
      Heading:
        'Winning chances since 2004: 18% for tainted candidates, 11% for clean',
      name: 'Source: The Indian Express',
      date: 'Jan 12, 2022',
      id: 3,
    },
    {
      description:
        'India’s most populous state Uttar Pradesh, currently ruled by Prime Minister Narendra Modi’s Bharatiya Janata Party, will hold a state election in seven phases starting from Feb. 10, Chief Election Commissioner Sushil Chandra said on Saturday. ',
      Heading:
        'Winning chances since 2004: 18% for tainted candidates, 11% for clean',
      name: 'Source: The Indian Express',
      date: 'Jan 12, 2022',

      id: 5,
    },
  ];
  // ----------------------state---------------------------------//
  const [keyword, setkeyword] = useState('');
  const [optionselect, setOptionselect] = useState(Feeds);
  // ------------------------function call-------------------------------//

  const Searchfunc = async val => {
    if (val?.length > 0 || val !== undefined) {
    }
  };

  const clearInput = async val => {
    setkeyword('');
  };
  const handleSelect = id => {
    let temp = optionselect.map(product => {
      if (id === product.id) {
        return {...product, isChecked: !product.isChecked};
      }
      return product;
    });
    setOptionselect(temp);
  };

  let selected = optionselect.filter(product => product.isChecked);

  return (
    <Backgroundlayout>
      <SafeAreaView style={Styles().flex}>
        <Header
          RightIcon
          heading="Top Global Headlines"
          imglink={links.filter}></Header>
        <View style={Styles().subcontainer}>
          <SearchBox
            onchangeText={text => {
              setkeyword(text);
              Searchfunc(text);
            }}
            type="cross"
            Value={keyword}
            Press={() => clearInput(keyword)}
            onpress={() => Searchfunc(keyword)}
          />
        </View>

        <FeedComponent
          data={optionselect ? optionselect : null}
          onpressbookmark={handleSelect}
          bookmarkvalue={optionselect}
        />
      </SafeAreaView>
    </Backgroundlayout>
  );
};
export default GlobalHeadline;
const styles = StyleSheet.create({});
