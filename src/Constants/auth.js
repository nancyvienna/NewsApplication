import AsyncStorage from '@react-native-async-storage/async-storage';
export const storageKey = {
  AUTH_TOKEN: '@AUTH_TOKEN',
  FILTER: '@FILTER',
  TEMP_AUTH_TOKEN: '@TEMP_AUTH_TOKEN',
  USER_DATA: '@USERDATA',
  USER_ID: '@USER_ID',
  CONSULT_FEE: '@CONSULT_FEE',
  ROOM_ID: '@ROOM_ID',
};
export async function storeData(key, value) {
  await AsyncStorage.setItem(key, value);
}
export async function getData(key) {
  return await AsyncStorage.getItem(key).then(value => {
    return value;
  });
}
export async function clearData() {
  const keys = [storageKey.AUTH_TOKEN];
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (e) {}
}
export async function clearFilter() {
  const keys = [storageKey.FILTER];
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (e) {}
}
