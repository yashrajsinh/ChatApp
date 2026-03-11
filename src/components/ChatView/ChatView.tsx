import { View, Text, SectionList, StyleSheet } from 'react-native';
import React from 'react';
import { CHAT_DATA } from '../../data/ChatData';

{
  /* This compoent is responsible for rendering enitre array chat data using Seciton header  */
}
export default function ChatView() {
  return (
    <View style={styles.container}>
      <SectionList
        style={{ flex: 1 }}
        renderSectionHeader={({ section }) => (
          <View style={styles.headerBox}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        )}
        sections={[...CHAT_DATA].reverse()}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <View style={styles.messageBox}>
            <Text style={styles.messageText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
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
});
