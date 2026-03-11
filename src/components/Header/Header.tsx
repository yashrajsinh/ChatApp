import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import React from 'react';

{
  /*
  This component is just the header of chat view where Image, 
  Username and current status is visible with Video and Audio call option 
  */
}
const Header = () => {
  return (
    <View style={styles.container}>
      {/* Left Side Bacqk icon*/}
      <View style={styles.leftSection}>
        <Text style={styles.icon}> ❮ </Text>

        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_h6DezRwB9Y9r2F-JrQeldKWJa81zZdMog&s',
          }}
          style={styles.avatar}
        />
        {/* user name and status */}
        <View>
          <Text style={styles.name}>Prison Mike </Text>
          <Text style={styles.status}>🟢 Online • Gruel enthusiast</Text>
        </View>
      </View>

      {/* Right Side Video and audio Call */}
      <View style={styles.rightSection}>
        <Text
          style={styles.icon}
          onPress={() => Alert.alert('Better Luck next time!')}
        >
          📞
        </Text>
        <Text
          style={styles.icon}
          onPress={() =>
            Alert.alert(
              'Are you sure ?',
              'Video call is also showing your face....',
            )
          }
        >
          🎦
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#F5F2F2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 3,
    borderColor: '#eee',
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  rightSection: {
    flexDirection: 'row',
    gap: 15,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#41431B',
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
  },

  status: {
    fontSize: 12,
    color: 'gray',
  },

  icon: {
    fontSize: 25,
  },
});
