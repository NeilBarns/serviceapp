import AsyncStorage from '@react-native-async-storage/async-storage';

const useAsyncStorageOperation = () => {

  const initializeStorage = async () => {
    // await AsyncStorage.clear()
    // await AsyncStorage.setItem('@draftId', '0');
    // let keys = []
    // try {
    //   keys = await AsyncStorage.getAllKeys()
    // } catch (e) {
    //   // read key error
    // }

    // const keys = await AsyncStorage.getItem('dftPrj_2');

    // console.log(keys);
  }

  const saveData = async (value) => {
    let stringifiedValue = JSON.stringify(value);
    let draftId = await AsyncStorage.getItem('@draftId');
    let assignedId = parseInt(draftId) + 1;
    let keyName = 'dftPrj_' + draftId;

    await AsyncStorage.setItem(keyName, stringifiedValue);
    await AsyncStorage.setItem('@draftId', assignedId.toString());
  }

  const fetchKeys = async () => {
    let keys = [];
    keys = await AsyncStorage.getAllKeys();
    return keys;
  }

  const fetchKeyData = async (keyName) => {
    const jsonValue = await AsyncStorage.getItem(keyName);
    return jsonValue != null ? JSON.parse(jsonValue) : null
  }

  return {
    initializeStorage,
    saveData,
    fetchKeys,
    fetchKeyData
  };
};

export default useAsyncStorageOperation;
