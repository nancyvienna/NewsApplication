import {View, ScrollView, SafeAreaView, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import {Styles} from '../../utility/CommonStyle';
import {colors} from '../../Constants';
import {Header, TextComponent} from '../../components';
const Description = ({navigation, route}) => {
  const {item} = route.params;

  // -------------------------BACKHANDLER_CALL-----------------------------------------------//

  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);
  // ------------------------------------------------------------------------//
  return (
    <SafeAreaView style={Styles().container}>
      <Header heading="Detail" imglink={links.filter}></Header>
      <View style={Styles().subcontainer}>
        <ScrollView>
          <View style={[Styles().subContainer]}>
            <TextComponent
              style={[Styles().cardSubHeading, {color: colors.lightGrey}]}
              text={item?.description}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Description;
