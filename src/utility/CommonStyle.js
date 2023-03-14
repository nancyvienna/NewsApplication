import {Dimensions, StyleSheet} from 'react-native';
import TextcomponentGradient from 'react-native-linear-gradient';
const window = Dimensions.get('window');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from './index';
import {colors, sizes} from '../Constants';
import {useContext} from 'react';
import {fonts, fontScale} from '../Constants';
import { moderateScale } from 'react-native-size-matters';

export const Styles = () => {
  const Background = colors.backgroundClr;

  return StyleSheet.create({
    splashcontainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'red',
    },
    subcontainer: {
      paddingHorizontal: sizes.l,
    },
    flex: {
      flex: 1,
    },
    ///// Vertical paddings /////
    paddingVerticalxxxs: {
      paddingVertical: sizes.xxss,
    },
    paddingVerticalxxs: {
      paddingVertical: sizes.xxs,
    },
    paddingVerticalxs: {
      paddingVertical: sizes.xs,
    },
    paddingVerticals: {
      paddingVertical: sizes.s,
    },
    paddingVerticall: {
      paddingVertical: sizes.l,
    },
    paddingVerticalxl: {
      paddingVertical: sizes.xl,
    },
    paddingxs: {
      padding: sizes.xs,
    },
    newstyle: {
      paddingVertical: sizes.xl,
      height: hp('77%'),
      justifyContent: 'center',
    },
    paddingVerticalxxl: {
      paddingVertical: sizes.xxl,
    },
    paddingVerticalxxl: {
      paddingVertical: sizes.xxxl,
    },

    ////////////////////
    ///// fontsize /////
    fontSize10: {
      fontSize: fontScale(10),
    },
    fontSize12: {
      fontSize: fontScale(12),
    },
    fontSize18: {
      fontSize: fontScale(18),
    },
    fontSize16: {
      fontSize: fontScale(16),
    },
    fontSize35: {
      fontSize: fontScale(35),
    },
    /////
    cardSubHeading: {
      fontSize: fontScale(12),
      color: colors.ligtestgrey,
    },
    justifyrow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};
