import React, {useState} from 'react';
import {Modal, Text, TextInput, TouchableOpacity} from 'react-native';

const EditResin = modifyResin => {
  const [state, setState] = useState({visible: false, value: ''});

  const onValueChange = t => setState({...state, value: t});

  const handleVisibility = () => setState({value: '', visible: !state.visible});

  const handleModify = () => modifyResin(state.value);

  return {
    component: (
      <Modal visible={state.visible} animationType="fade">
        <TextInput
          value={state.value}
          onChangeText={onValueChange}
          placeholder="Enter value"
        />
        <TouchableOpacity
          onPress={() => {
            handleModify();
            handleVisibility();
          }}>
          <Text>Ok</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleVisibility();
          }}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </Modal>
    ),
    handleVisibility,
  };
};

export default EditResin;
