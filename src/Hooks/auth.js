import { useQuery, useMutation } from "react-query";
import {getFeed,getSearchfeed} from '../Hooks/services';
export const get_feed = (payload) => useQuery(['get_feed',{payload}], () => getFeed(payload?payload:"topic"));
export const searching = (payload) => useQuery(['search',{payload}], () => getSearchfeed(payload?payload:""));

