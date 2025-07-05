import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Colors } from "../constants/Colors";

const BackToHome = () => {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
      <Text style={styles.text}>← Back to Home</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 10,
  },
  text: {
    color: "#6849a7",
    fontSize: 19,
    fontWeight: "bold",
  },
});

export default BackToHome;
