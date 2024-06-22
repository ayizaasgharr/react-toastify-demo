export const duration=`import React from 'react';
import { View, Button } from 'react-native';
import { ToastContainer, toast } from 'react-native-toastify';
import 'react-native-toastify/dist/ReactNativeToastify.css';  // Ensure you have the CSS for toastify

const App = () => {
  const showToast = () => {
    toast("This toast will auto-close after 8 seconds");
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show Toast" onPress={showToast} />
      <ToastContainer autoClose=8000/>
    </View>
  );
};

export default App;`