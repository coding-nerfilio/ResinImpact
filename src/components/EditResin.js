import React, {useState} from 'react';
import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Styles from '../assets/styles';

const EditResin = modifyResin => {
  const [state, setState] = useState({visible: false, value: ''});

  const onValueChange = t => setState({...state, value: t});

  const handleVisibility = () => setState({value: '', visible: !state.visible});

  const handleModify = () => modifyResin(state.value);

  return {
    component: (
      <Modal
        visible={state.visible}
        animationType="fade"
        style={Styles.ModalCentered}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <TextInput
            value={state.value}
            onChangeText={onValueChange}
            placeholder="Enter value"
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              alignSelf: 'center',
              width: '70%',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={{...Styles.Button, width: '20%', marginRight: 10}}
              onPress={() => {
                handleModify();
                handleVisibility();
              }}>
              <Text>Ok</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...Styles.Button, width: '20%'}}
              onPress={() => {
                handleVisibility();
              }}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    ),
    handleVisibility,
  };
};

export default EditResin;
