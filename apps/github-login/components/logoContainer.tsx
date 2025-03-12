import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";

type Props = {};

const LogoContainer = (props: Props) => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require("./../assets/images/octocat.png")}
        style={styles.logo}
      ></Image>
      <Text style={styles.logoText}>
        A React Native app for the GitHub login screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoText: { color: "#FFF", width: 160, fontSize: 14 },
});

export default LogoContainer;
