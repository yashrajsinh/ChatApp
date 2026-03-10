import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Left Side */}
      <View style={styles.leftSection}>
        <Text style={styles.icon}> ❮ </Text>

        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=8' }}
          style={styles.avatar}
        />

        <View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.status}>🟢 Online</Text>
        </View>
      </View>

      {/* Right Side */}
      <View style={styles.rightSection}>
        <Text style={styles.icon}> 📞 </Text>
        <Text style={styles.icon}> 🎦 </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#fff',
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
    borderWidth: 2,
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
