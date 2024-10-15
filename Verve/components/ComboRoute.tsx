import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComboRoute = () => {
  return (
    <View style={styles.container}>
      <Text>Combo Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ComboRoute;
