import { View, Text, SectionList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { CHAT_DATA } from '../../data/ChatData'; //Initial Data
import InputMessage from '../InputMessage/InputMessage';

{
  /* This compoent is responsible for rendering enitre array chat data using Seciton header  */
}
export default function ChatView() {
  const [message, setMessage] = useState(CHAT_DATA);

  function addMessage(text: string) {
    const newMessage = {
      text: text,
      sender: 'me',
    };

    const updatedSections = [...message];

    updatedSections[0].data = [...updatedSections[0].data, newMessage];

    setMessage(updatedSections);
  }
  return (
    <View style={styles.container}>
      <SectionList
        style={{ flex: 1 }}
        renderSectionHeader={({ section }) => (
          <View style={styles.headerBox}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        )}
        sections={[...message].reverse()} //useState here
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageBox,
              item.sender === 'me' ? styles.myMessage : styles.botMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      {/* ==== Send Message Component ==== */}
      <InputMessage onSend={addMessage} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    paddingHorizontal: 10,
  },

  headerBox: {
    alignSelf: 'center',
    backgroundColor: '#E6E8EB',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    marginVertical: 10,
  },

  headerText: {
    fontSize: 12,
    color: '#555',
    fontWeight: '500',
  },

  messageBox: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    marginVertical: 4,
    maxWidth: '75%',
    elevation: 2,
  },

  messageText: {
    fontSize: 16,
    color: '#333',
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#BFC9D1',
  },

  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
});
