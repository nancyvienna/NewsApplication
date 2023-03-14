import { proxy, useSnapshot } from 'valtio'
import auth from '../State/auth';
const state = proxy({
    auth
  });
  export default state;