import { View } from "react-native";
import { Slot } from "expo-router";
import React from "react";

type Props = {};

const _layout = (props: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
  );
};

export default _layout;
