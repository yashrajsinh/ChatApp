/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/components/Header/Header';
import ChatView from './src/components/ChatView/ChatView';
import InputMessage from './src/components/InputMessage/InputMessage';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <ChatView />
        <InputMessage />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default App;
