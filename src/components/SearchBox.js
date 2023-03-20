import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {sizes} from '../Constants';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import {colors} from '../Constants';
import {ErrorMessage} from './ErrorMessage';
export const SearchBox = ({...props}) => {
  return (
    <View>
      <View style={[styles.boxContainer, styles.flexStyle]}>
        <TouchableOpacity
          style={{flex: 0.1, alignItems: 'center'}}
          onPress={props.onpress}>
          <Icon name={'search1'} color={'#848484'} size={22} />
        </TouchableOpacity>
        <View style={{paddingHorizontal: 10, flex: 0.8}}>
          <TextInput
            allowFontScaling={false}
            onChangeText={props.onchangeText}
            value={props.Value}
            placeholder="Search..."
            style={styles.boxStyle}
            placeholderTextColor="#B1B1B1"
          />
        </View>

        {!props?.error ? (
          <TouchableOpacity
            onPress={props.Press}
            style={{flex: 0.1, alignItems: 'center'}}>
            {props?.cross? (
              <Icon name={'close'} color={'#848484'} size={22} />
            ) : (
              <Ionicons name={'arrow-forward'} color={'#848484'} size={22} />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
      <ErrorMessage {...props} message={'20 character max'}></ErrorMessage>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: colors.white,
    shadowColor: colors.white,
    height: Platform.OS == 'ios' ? 50 : null,
    elevation: 1,
    borderRadius: 30,
    paddingHorizontal: sizes.l,
    paddingVertical: sizes.xxss,
  },
  flexStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
