import {  QueryClient, QueryCache } from 'react-query';
const queryClient = new QueryClient();
const queryCache = new QueryCache({
    onError: error => {
      console.log("errorclient",error)
    },
    onSuccess: data => {
      console.log("successclient",data)
    }
  });
export {queryClient, queryCache};
