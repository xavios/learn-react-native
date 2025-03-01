import { StyleSheet, View, Text, Button, TextInput } from "react-native";

const Index = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputs}>
        <TextInput placeholder="Your course goal" style={styles.textInput} />
        <View style={styles.buttonContainer}>
          <Button title="Add" />
        </View>
      </View>
      <View style={styles.list}>
        <Text>List of the already added goals...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 16,
    flexDirection: "column",
  },
  inputs: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  list: {},
  textInput: {
    width: "80%",
    borderWidth: 1,
    marginRight: 8,
    borderColor: "#ccc",
    padding: 8,
  },
  buttonContainer: { width: "15%" },
});

export default Index;
