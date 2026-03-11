/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//Components
import Header from './src/components/Header/Header';
import ChatView from './src/components/ChatView/ChatView';
import InputMessage from './src/components/InputMessage/InputMessage';
{
  /*  Entry point for an App (renders diffrent components ) */
}

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* ==== Header Component ==== */}
        <Header />
        {/* ==== Keep Keyboard above intput ==== */}
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
          {/* ==== Chat Component ==== */}
          <ChatView />
          {/* ==== Send Message Component ==== */}
          <InputMessage />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default App;
