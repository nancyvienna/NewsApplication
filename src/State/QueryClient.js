import {  QueryClient, QueryCache } from 'react-query';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime:500 * 60 * 1000
    },
  },
});
const queryCache = new QueryCache({
    onError: error => {
      console.log("errorclient",error)
    },
    onSuccess: data => {
      console.log("successclient",data)
    }

  });
export {queryClient, queryCache};
