// import {getData, storageKey, storeData} from '../../constants/auth';
import * as url from './config';
import * as Services from './Servicefile';


import { getnewsfeed,getSearchnews } from "./queries";

export const getFeed = async(payload) => {
   console.log(payload,"ppp")
  
    try {
      const {data} = await Services.get(url.NEWSFEED +getnewsfeed(payload?payload:'topic'));
      return data;
    } catch (error) {
      return {message: error};
    }
    
 }

export const getSearchfeed = async(payload) => {

 
   try {
     const {data} = await Services.get(url.NEWSFEED +getSearchnews(payload?payload:'random'));
     return data;
   } catch (error) {
     // console.log(error, 'err-----------');
     return {message: error};
   }
   
}
 