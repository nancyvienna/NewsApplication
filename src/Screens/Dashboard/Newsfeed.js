import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from '../../utility/CommonStyle';
import {colors, sizes} from '../../Constants';
import links from '../../Constants/images';
import {queryClient} from '../../State/QueryClient';
import {get_feed} from '../../Hooks/auth';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../utility/index';
import {
  Header,
  Backgroundlayout,
  Loader,
  ChecklistComponent,
} from '../../components/index';
import {FeedComponent} from '../../components/FeedComponent';
const Newsfeed = ({navigation, route}) => {
  // ------------------------array -------------------------------//

  var specialitylist = [
    {name: 'Indian Elections', id: 1},
    {name: 'Cannabis', id: 2},
    {name: 'Canada Immigration', id: 3},
    {name: 'Cricket', id: 4},
  ];
  // ----------------------state---------------------------------//
  const [selectedTopic, setSelectedTopic] = React.useState('');
  const [selectedvalue, setselectedvalue] = React.useState('');

  const [optionselect, setOptionselect] = useState([]);

  let {data, isLoading} = get_feed(selectedvalue);
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
          heading="My News Feed"
          imglink={links.filter}></Header>
        <Loader loading={isLoading}></Loader>

        {data !== undefined && (
          <>
            <FeedComponent
              data={data}
              onpressbookmark={handleSelect}
              bookmarkvalue={optionselect}
            />
            <View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                {specialitylist.map((item, index) => {
                  const isSelected = selectedTopic == item.id ? true : false;
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
