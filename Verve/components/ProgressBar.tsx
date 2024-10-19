import React from "react";
import { View, StyleSheet } from "react-native";
import { useColorScheme } from "./useColorScheme";
import Colors from "@/constants/Colors";
import { rV } from "@/constants";

interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step, totalSteps }) => {
  const progress = (step / totalSteps) * 100;
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? "light"];

  const styles = StyleSheet.create({
    container: {
      height: rV(4),
      backgroundColor: themeColors.text,
      borderRadius: 4,
      overflow: "hidden",
      marginVertical: 10,
    },
    progress: {
      height: "100%",
      backgroundColor: themeColors.tint,
    },
  });

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress}%` }]} />
    </View>
  );
};

export default ProgressBar;
