import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import uuid from "react-native-uuid";

const Index = () => {
  const [goalInput, setGoalInput] = useState("");
  const goalInputHandler = (value: string) => {
    setGoalInput(value);
  };

  interface GoalItem {
    concreteGoal: string;
    id: string;
  }

  const [goals, setGoals] = useState<GoalItem[]>([]);

  const addPressHandler = () => {
    setGoals((previousGoals) => {
      return [...previousGoals, { concreteGoal: goalInput, id: uuid.v4() }];
    });
  };

  return (
    <View style={s.appContainer}>
      <View style={s.inputs}>
        <TextInput
          placeholder="Your course goal"
          style={s.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={s.buttonContainer}>
          <Button title="Add" onPress={addPressHandler} />
        </View>
      </View>
      <View style={s.list}>
        {goals.length ? (
          <FlatList
            data={goals}
            renderItem={(itemData) => (
              <View style={s.listElement}>
                <Text style={s.listElementText}>
                  {itemData.item.concreteGoal}
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text>Add you goals for the course!</Text>
        )}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  listElement: {
    backgroundColor: "rebeccapurple",
    borderRadius: 6,
    padding: 8,
    margin: 8,
  },
  listElementText: { color: "white" },
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
