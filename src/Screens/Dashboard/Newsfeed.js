import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from '../../utility/CommonStyle';
import {colors, sizes} from '../../Constants';
import links from '../../Constants/images';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../utility/index';
import {
  Header,
  Backgroundlayout,
  ChecklistComponent,
} from '../../components/index';
import {FeedComponent} from '../../components/FeedComponent';
const Newsfeed = ({navigation, route}) => {
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
  var specialitylist = [
    {name: 'Indian Elections', id: 1},
    {name: 'Cannabis', id: 2},
    {name: 'Canada Immigration', id: 3},
    {name: 'Cannabis', id: 2},
    {name: 'Cricket', id: 4},
  ];
  // ----------------------state---------------------------------//
  const [selectedfeed, setSelectedfeed] = React.useState([]);
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

  const feedfunction = (isSelectedvalue, index) => {
    if (isSelectedvalue) {
      setSelectedfeed(prev => prev.filter(i => i !== index));
    } else {
      setSelectedfeed(prev => [...prev, index]);
    }
  };

  // -------------------------------------------------------//

  return (
    <Backgroundlayout>
      <SafeAreaView style={Styles().flex}>
        <Header
          RightIcon
          heading="My News Feed"
          imglink={links.filter}></Header>

        <FeedComponent
          data={optionselect ? optionselect : null}
          onpressbookmark={handleSelect}
          bookmarkvalue={optionselect}
        />
        <View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {specialitylist.map((item, index) => {
              const isSelected =
                selectedfeed.filter(i => i === index).length > 0;
              return (
                <ChecklistComponent
                  data={item}
                  index={index}
                  isselected={isSelected}
                  setSelectedBrands={feedfunction}></ChecklistComponent>
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    </Backgroundlayout>
  );
};
export default Newsfeed;
const styles = StyleSheet.create({
  paddingVerticall: {
    paddingVertical: sizes.l,
  },
  viewborder: {
    borderWidth: 1,
    backgroundColor: colors.white_Colors,
    borderRadius: 10,
    borderColor: colors.white_Colors,
    overflow: 'hidden',

    // fontSize: fontScale(12),
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
