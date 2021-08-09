import React, {useState} from 'react';
import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import EditSvg from '../assets/EditSVG';

const EditButton = ({resinAmount, modifyResin}) => {
  const [editModal, setEditModal] = useState({
    visible: false,
    value: resinAmount,
  });

  return (
    <>
      <View>
        <TouchableOpacity
          onPress={() => {
            setEditModal({visible: true, value: resinAmount});
          }}>
          <EditSvg width={16} height={16} />
        </TouchableOpacity>
      </View>
      <Modal visible={editModal.visible}>
        <TextInput
          value={editModal.value}
          onChangeText={t => setEditModal({...editModal, value: t})}
        />
        <TouchableOpacity
          onPress={() => {
            modifyResin(editModal.value);
            setEditModal({...editModal, visible: false});
          }}>
          <Text>Ok</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setEditModal({...editModal, visible: false});
          }}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default EditButton;
