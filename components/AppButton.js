import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import Colour from "./Colour";

function AppButton({ title, onPress, color = "brand" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: Colour[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colour.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: Colour.primary,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;