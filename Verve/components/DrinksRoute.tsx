import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DrinksRoute = () => {
  return (
    <View style={styles.container}>
      <Text>Drinks Content</Text>
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

export default DrinksRoute;
