import React from 'react';
import {colors, images, fonts} from '../Constants';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
export const Loader = props => {

  return (
    <View
      style={[
        styles.loader,
        {backgroundColor: props.loading ? colors.white : null},
      ]}>
      {props.loading && (
        <ActivityIndicator
          size="large"
          color={colors.red}
          style={{zIndex: 1}}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: '50%',
    left: '42%',
    zIndex: 10,
    backgroundColor: '#E6E6E6',
    padding: 10,
    borderRadius: 10,
    opacity: 0.5,
  },
});
