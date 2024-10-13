import { Link, Stack } from "expo-router";
import React from "react";
import { useColorScheme, Text, Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "../../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

export default function Tab1Layout() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? "light"];

  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            headerTitle: () => (
              <Text
                style={{
                  color: themeColors.text,

                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Hi Pravesh!
              </Text>
            ),
            headerStyle: {
              backgroundColor: themeColors.background,
            },
            headerShadowVisible: false,
            headerRight: () => (
              <Link href="/notifications" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="bell-o"
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Stack.Screen
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
        />
      </Stack>
    </SafeAreaProvider>
  );
}
