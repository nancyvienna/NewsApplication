import { proxy, useSnapshot } from 'valtio'
import state from '../Store';

const auth = proxy({
  articles:[],
  globalarticles:[],
  globalmark:[],
});
export default auth;

export const bookmarkselect = (data) => {
  auth.articles = data;


}
export const bookmarkselectglobal = (data) => {
  auth.globalarticles = data;


}
export const markselectglobal = (data) => {
  auth.globalmark = data;


}

