import { StyleSheet, View, Text, Button } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Another piece of text here!</Text>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Button title="Tap me!" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    borderWidth: 2,
    padding: 16,
    borderColor: "red",
    margin: 16,
  },
});

export default Index;
