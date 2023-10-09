import * as React from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const [textToSpeach, setTextToSpeach] = React.useState("");

  const speak = () => {
    Speech.speak(textToSpeach);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type something"
        value={textToSpeach}
        onChangeText={(text) => setTextToSpeach(text)}
      />
      <Button title="Press to hear the text" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
