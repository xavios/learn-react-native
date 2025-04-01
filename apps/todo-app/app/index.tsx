import { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

type Task = {
  time: Date;
  name: string;
};

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "goldenrod",
        borderWidth: "3px",
      }}
    >
      <View style={styles.headerContainer}>
        <Text style={{ fontWeight: "900", color: "#FFF" }}>- NOTER -</Text>
      </View>
      <View style={styles.contentContainer}>
        {tasks.map((task) => (
          <View style={styles.taskContainer}>
            <View>
              <Text>
                {task.time.getFullYear()}-{task.time.getMonth() + 1}-{" "}
                {task.time.getDay()} {task.time.getHours()}:
                {task.time.getMinutes()}
              </Text>
              <Text>{task.name}</Text>
            </View>
            <TouchableOpacity>
              <Text>🗑️</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.footerContainer}>
        <TextInput
          placeholder="Write here your task..."
          style={styles.taskInput}
          onChangeText={(value) => {
            setNewTask(value);
          }}
        ></TextInput>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setTasks((tasks) => [
              ...tasks,
              { time: new Date(), name: newTask } as Task,
            ]);
          }}
        >
          <Text style={{ color: "#FFF", fontWeight: "900" }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.1,
    backgroundColor: "#D50000",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },
  contentContainer: {
    flex: 0.8,
    width: "100%",
  },
  footerContainer: {
    flex: 0.1,
    width: "100%",
    flexDirection: "row",
    padding: "10px",
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: "#323232",
  },
  taskInput: {
    flex: 6,
    color: "#FFF",
    borderWidth: "0px",
    fontWeight: "600",
  },
  addButton: {
    flex: 1,
    backgroundColor: "#D50000",
    padding: "10px",
    borderRadius: "100px",
    alignItems: "center",
    color: "#FFF",
  },
  taskContainer: {
    width: "100%",
    marginTop: "10px",
    marginBottom: "10px",
    padding: "10px",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
