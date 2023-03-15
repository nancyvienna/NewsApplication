import * as Url from './config';
import * as Utility from '../utility/index';
import {Alert} from 'react-native';
// import {clearData, getData, storageKey} from '../constants/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export const get = async (url, token, hide = false) => {
   
    const completeUrl = Url.BASE_URL + url;
    console.log('completeUrl', completeUrl);
    try {
      const res = await axios(completeUrl, {
        method: 'GET',
      });
      if (res.status == 200) {
        // const message = "success";
        // !hide ? Utility.showToast({message}) : null;
      }
      if (res?.statusCode == 411) {
        Alert.alert('Logout', 'Session Expired!', [
          {text: 'OK', onPress: () => Logout()},
        ]);
      } else {

        // const message = "Something went wrong";
        // !hide ? Utility.showToast({message}) : null;
      }
      return res;
    } catch (error) {
      const message = "Something went wrong";
      !hide ? Utility.showToast({message}) : null;
      console.log(error);
      return error;
    }
  };

