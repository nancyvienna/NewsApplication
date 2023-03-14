import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors, sizes} from '../Constants';
import {TextComponent} from './TextComponent';

export const ErrorMessage = ({...props}) => {
  return (
    <View
      style={{
        marginHorizontal: 17,
        marginVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 12,
      }}>
      {props.error && props.Value ? (
        <TextComponent style={styles.errorMessage} text={props.message}  />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  errorMessage: {
    color: colors.red,
    textAlign:"right",
    fontSize:12,
  },
});
