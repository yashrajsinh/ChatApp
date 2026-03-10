/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text> Hola</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
