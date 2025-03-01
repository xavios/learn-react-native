import { useRef, useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

const Index = () => {
  const [goalInput, setGoalInput] = useState("");
  const goalInputHandler = (value: string) => {
    setGoalInput(value);
  };

  const [goals, setGoals] = useState<string[]>([]);

  const addPressHandler = () => {
    setGoals((previousGoals) => {
      return [...previousGoals, goalInput];
    });
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputs}>
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add" onPress={addPressHandler} />
        </View>
      </View>
      <View style={styles.list}>
        {goals.length ? (
          goals.map((goal) => <Text>{goal}</Text>)
        ) : (
          <Text>List of the already added goals...</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: "column",
    flex: 1,
    alignContent: "flex-start",
  },
  inputs: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 32,
    borderBottomColor: "rebeccapurple",
    borderBottomWidth: 1,
  },
  list: { flex: 8, paddingLeft: 20 },
  textInput: {
    flex: 8,
    borderWidth: 1,
    marginRight: 8,
    borderColor: "#ccc",
    padding: 8,
  },
  buttonContainer: { flex: 3 },
});

export default Index;
