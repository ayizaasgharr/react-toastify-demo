export const removeToast=`   import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import Toast from 'react-native-toastify';

const Example = () => {
  const toastId = useRef(null);

  const notify = () => {
    toastId.current = Toast.show("Lorem ipsum dolor", {
      duration: Toast.durations.SHORT,
      position: Toast.positions.TOP,
    });
  };

  const dismiss = () => {
    if (toastId.current !== null) {
      Toast.hide(toastId.current);
    }
  };

  const dismissAll = () => {
    Toast.hideAll();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Notify" onPress={notify} />
      <Button title="Dismiss" onPress={dismiss} />
      <Button title="Dismiss All" onPress={dismissAll} />
    </View>
  );
};

export default Example;
`