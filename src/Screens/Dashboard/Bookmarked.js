import {
  SafeAreaView,
  StyleSheet,

} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from '../../utility/CommonStyle';
import links from '../../Constants/images';


import {
  Header,
  Backgroundlayout,
} from '../../components/index';
import {FeedComponent} from '../../components/FeedComponent';
const Bookmarked = ({navigation, route}) => {
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
      isChecked: false,
    },
    {
      description:
        'India’s most populous state Uttar Pradesh, currently ruled by Prime Minister Narendra Modi’s Bharatiya Janata Party, will hold a state election in seven phases starting from Feb. 10, Chief Election Commissioner Sushil Chandra said on Saturday. ',
      Heading:
        'Winning chances since 2004: 18% for tainted candidates, 11% for clean',
      name: 'Source: The Indian Express',
      date: 'Jan 12, 2022',
      isChecked: false,
      id: 2,
    },
    {
      description:
        'India’s most populous state Uttar Pradesh, currently ruled by Prime Minister Narendra Modi’s Bharatiya Janata Party, will hold a state election in seven phases starting from Feb. 10, Chief Election Commissioner Sushil Chandra said on Saturday. ',
      Heading:
        'Winning chances since 2004: 18% for tainted candidates, 11% for clean',
      name: 'Source: The Indian Express',
      date: 'Jan 12, 2022',
      isChecked: false,

      id: 3,
    },
    {
      description:
        'India’s most populous state Uttar Pradesh, currently ruled by Prime Minister Narendra Modi’s Bharatiya Janata Party, will hold a state election in seven phases starting from Feb. 10, Chief Election Commissioner Sushil Chandra said on Saturday. ',
      Heading:
        'Winning chances since 2004: 18% for tainted candidates, 11% for clean',
      name: 'Source: The Indian Express',
      date: 'Jan 12, 2022',
      isChecked: false,

      id: 4,
    },
  ];
  // ----------------------state---------------------------------//
  const [optionselect, setOptionselect] = useState(Feeds);
  // ------------------------function call-------------------------------//

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

  //------------------------------------------------------------
  return (
    <Backgroundlayout>
      <SafeAreaView style={Styles().flex}>
        <Header
          RightIcon
          heading="News Bookmarked"
          imglink={links.filter}></Header>

        <FeedComponent
          data={optionselect ? optionselect : null}
          onpressbookmark={handleSelect}
          bookmarkvalue={optionselect}
        />
      </SafeAreaView>
    </Backgroundlayout>
  );
};
export default Bookmarked;
const styles = StyleSheet.create({});
