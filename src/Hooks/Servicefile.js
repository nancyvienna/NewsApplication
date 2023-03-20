import * as Url from './config';
import * as Utility from '../utility/index';
import axios from 'axios';
export const get = async (url) => {
    const completeUrl = Url.BASE_URL + url;
    try {
      const res = await axios(completeUrl, {
        method: 'GET',
      });
      if (res.status == 200) {
        // const message = "success";
        // !hide ? Utility.showToast({message}) : null;
      }
    else {
        const message = "Something went wrong";
        Utility.showToast({message})
      }
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

