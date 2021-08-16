import {Linking} from 'react-native';

const OpenLink = async link => {
  const supported = await Linking.canOpenURL(link);
  if (supported) {
    await Linking.openURL(link);
  }
};

export default OpenLink;
