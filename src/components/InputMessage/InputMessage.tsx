import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';

{
  /* This compoent will let user input the message and add that value to array  */
}
export default function InputMessage({ onSend }: any) {
  //useState to store message value
  const [inputValue, setInputValue] = useState('');

  function handlePress() {
    onSend(inputValue); //Sent it to parent
    setInputValue('');
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type a message..."
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
      />

      <TouchableOpacity
        style={styles.sendBtn}
        activeOpacity={0.5}
        onPress={() => handlePress()}
      >
        <Text style={styles.sendText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },

  input: {
    flex: 1,
    backgroundColor: '#F1F3F5',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 15,
    fontSize: 16,
  },

  sendBtn: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },

  sendText: {
    color: 'white',
    fontWeight: '600',
  },
});
