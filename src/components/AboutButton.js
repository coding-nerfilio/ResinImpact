import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import Styles from '../assets/styles';
import {GITHUB_LINK} from '../constants';
import OpenLink from '../utils/OpenLink';

const AboutButton = () => {
  const handleOpenLink = () => OpenLink(GITHUB_LINK);
  const handleSwitchModal = () => {
    modal.handleSwitchModal();
  };
  const modal = AboutModal(handleOpenLink);

  return (
    <>
      <TouchableOpacity
        style={{
          ...Styles.Button,
          padding: 3,
          paddingHorizontal: 10,
          alignSelf: 'flex-start',
        }}
        onPress={handleSwitchModal}>
        <Text style={{fontSize: 15}}>?</Text>
      </TouchableOpacity>
      {modal.component}
    </>
  );
};

const AboutModal = handleOpenLink => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleSwitchModal = () => setModalVisible(!modalVisible);

  return {
    handleSwitchModal,
    component: (
      <Modal
        animationType="fade"
        visible={modalVisible}
        style={Styles.ModalCentered}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{alignSelf: 'center'}}>Made by Francisco Risso</Text>
          <View style={{alignSelf: 'center'}}>
            <Text style={{alignSelf: 'center'}}>Source code on:</Text>
            <Text
              style={{color: 'blue', alignSelf: 'center'}}
              onPress={handleOpenLink}>
              {GITHUB_LINK}
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleSwitchModal}
            style={{...Styles.Button, marginTop: 10}}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    ),
  };
};

export default AboutButton;
