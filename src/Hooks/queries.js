import * as url from './config';

export const getnewsfeed =(payload) =>"?q=${"+payload+ '} india&' +url.APIKEY
export const getSearchnews =(payload) =>"?q="+payload+"&from=2023-02-15&sortBy=publishedAt&" +url.APIKEY