import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

export default function Tab1Layout() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? "light"];

  return (
    <SafeAreaProvider>
      <Stack>
        {/* <Stack.Screen
          name="menu"
          options={{
            headerShown: true,
            title: "MENU",
            headerTitleStyle: {
              color: themeColors.text,
            },
            headerShadowVisible: false,
            headerBackVisible: false,
          }}
        /> */}
        <Stack.Screen
          name="Reservation"
          //   options={{
          //     headerShown: true,
          //     title: "Reservation",
          //     headerTitleStyle: {
          //       color: themeColors.text,
          //     },
          //     headerShadowVisible: false,
          //     headerBackVisible: false,
          //     headerStyle: {
          //       backgroundColor: themeColors.background,
          //     },
          //   }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
