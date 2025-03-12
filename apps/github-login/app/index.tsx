import { StyleSheet, KeyboardAvoidingView } from "react-native";
import React from "react";
import LogoContainer from "@/components/logoContainer";
import FormContainer from "@/components/formContainer";

type Props = {};

const Index = (props: Props) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <LogoContainer />
      <FormContainer />
    </KeyboardAvoidingView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: { backgroundColor: "#3498db", flex: 1 },
});
