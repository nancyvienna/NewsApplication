import AsyncStorage from '@react-native-async-storage/async-storage';
export const storageKey = {

  FEEDTOPIC: '@FEEDTOPIC',
  FAVFEEDTOPIC: '@FAVFEEDTOPIC',
  SELECTEDFEEDTOPIC: '@SELECTEDFEEDTOPIC',
  BOOKMARK: '@BOOKMARK',
  GLOBALBOOKMARK:'@GLOBALBOOKMARK'
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
