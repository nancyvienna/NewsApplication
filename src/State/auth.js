import { proxy, useSnapshot } from 'valtio'
import state from '../Store';

const auth = proxy({
  splash:false,
  newsfeed:false
});
export default auth;
export const launchscreen = (data) => {
  console.log(data,"------")
  auth.splash = data;


}
export const newsfeedfunc = (data) => {
  console.log(data,"------")
  auth.newsfeed = data;


}


