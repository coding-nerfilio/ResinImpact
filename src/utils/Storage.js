import AsyncStorage from '@react-native-async-storage/async-storage';

const SaveData = async secondsLeft => {
  try {
    const jsonValue = JSON.stringify({date: Date.now(), secondsLeft});
    await AsyncStorage.setItem('@resin_info', jsonValue);
  } catch (e) {}
};

const RetrieveData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@resin_info');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('error', e);
  }
};

const Storage = {
  SaveData,
  RetrieveData,
};

export default Storage;
