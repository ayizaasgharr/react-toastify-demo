export const positioningToast = `
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Container, { Toast } from 'toastify-react-native';

const App = () => {
  const handleSubmit = async () => {
    Toast.success('Promise if Resolved', {}, { position: "top" });
  };

  return (
    <View style={styles.container}>
      <Container position="top" />
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderColor: 'green',
          borderWidth: 1,
          padding: 10,
        }}
        onPress={() => handleSubmit()}>
        <Text>SHOW SOME AWESOMENESS !</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
`;