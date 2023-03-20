import * as url from './config';
const newDate = new Date();
import moment from "moment";

function getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
  
    return previous;
  }
const mydate=moment(getPreviousDay()).format('YYYY-MM-DD')
export const getnewsfeed =(payload) =>"?q=${"+payload+ '} india&' +url.APIKEY
export const getSearchnews =(payload) =>"?q="+payload+"&from="+mydate+"&sortBy=publishedAt&" +url.APIKEY