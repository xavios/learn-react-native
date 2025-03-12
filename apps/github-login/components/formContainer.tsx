import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";

type Props = {};

const FormContainer = (props: Props) => {
  const passwordInput = useRef(null);
  const loginButton = useRef(null);
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.form}
        placeholder="username or email"
        placeholderTextColor="rgba(255,255,255, 0.7)"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => passwordInput.current.focus()}
      ></TextInput>
      <TextInput
        style={styles.form}
        placeholder="password"
        placeholderTextColor="rgba(255,255,255, 0.7)"
        keyboardType="default"
        secureTextEntry={true}
        returnKeyType="go"
        ref={passwordInput}
        onSubmitEditing={() => {
          loginButton.current.focus();
        }}
      ></TextInput>
      <TouchableOpacity
        style={[
          styles.form,
          { alignItems: "center", backgroundColor: "#2c3e50" },
        ]}
        ref={loginButton}
      >
        <Text style={[styles.button, { color: "#fff" }]}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  formContainer: { flex: 1 },
  form: {
    backgroundColor: "#2980b9",
    marginLeft: 20,
    marginRight: 20,
    color: "#FFF",
    marginBottom: 20,
    padding: 15,
    fontSize: 16,
  },
  button: {
    fontWeight: 700,
  },
});
