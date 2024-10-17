import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";
import { useThemeColor } from "../../components/Themed";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>["name"];
  color: string;
}) {
  return <AntDesign size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const themeTextColor = useThemeColor(
    {
      light: Colors.light.text, // Set light mode text color
      dark: Colors.dark.text, // Set dark mode text color
    },
    "text"
  );

  // Get the background color for the menu page
  const themeBackgroundColor = useThemeColor(
    {
      light: Colors.light.background, // Change to your desired light mode background color
      dark: Colors.dark.background, // Change to your desired dark mode background color
    },
    "background"
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="main"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
