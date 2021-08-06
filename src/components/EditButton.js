import React, {useState} from 'react';
import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';

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
          <Text>E</Text>
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
      </Modal>
    </>
  );
};

export default EditButton;
