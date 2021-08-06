import AsyncStorage from '@react-native-async-storage/async-storage';

const SaveData = async (seconds, resine) => {
  try {
    const jsonValue = JSON.stringify({date: Date.now(), seconds, resine});
    await AsyncStorage.setItem('@resin_info', jsonValue);
  } catch (e) {}
};

const RetrieveData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@resin_info');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {}
};

const Storage = {
  SaveData,
  RetrieveData,
};

export default Storage;
