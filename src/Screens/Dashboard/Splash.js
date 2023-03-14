import {StyleSheet, Image, View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {colors} from '../../Constants/colors';
import * as Utility from '../../utility/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from '../../utility/index';
import { TextComponent } from '../../components/TextComponent';
  
import { launchscreen } from '../../State/auth';
import { Backgroundlayout } from '../../components';
import {moderateScale} from 'react-native-size-matters';

const Splash = ({route, navigation}) => {
  //---------------------------------------------------------------------------

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      SplashScreen.hide();

      setTimeout(() => {
        launchroute();
      }, 1800);
    });
    return unsubscribe;
  }, []);
 const launchroute=()=>{
navigation.navigate("Feeds")
 }
  //------------------------------FUNCTION_CALL_END---------------------------------------------

  return (
<Backgroundlayout style={styles.container}>
  
   <FontAwesome name={'newspaper-o'} color={colors.red} size={wp("20%")}/>
  <TextComponent text="NEWS"  style={styles.text}></TextComponent>
  </Backgroundlayout>
  );
};
export default Splash;
const styles = StyleSheet.create({
  container:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems:"center",
    },
    text:
      {color:colors.red,fontWeight:"bold", fontSize: moderateScale(25),}
    
  
});
