import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useThemeColor } from "../../components/Themed";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
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
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
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
          headerTitle: () => (
            <View
              style={{
                backgroundColor: themeBackgroundColor,
                padding: 10, // Add some padding to the background
                borderRadius: 5, // Optional: Round the corners
              }}
            >
              <Text
                style={{
                  color: themeTextColor,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Hi, Pravesh!
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="menu" // Ensure this matches the actual menu page route
        options={{
          title: "Menu", // Change this to your desired title
          headerStyle: {
            backgroundColor: "transparent",
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="cutlery" color={color} />, // Change icon as needed
          headerTitle: () => (
            <View
              style={{
                backgroundColor: "transparent",
                padding: 10, // Add some padding to the background
                borderRadius: 5, // Optional: Round the corners
              }}
            >
              <Text
                style={{
                  color: themeTextColor,
                  fontSize: 15, // Adjusted font size for consistency
                  fontWeight: "bold",
                }}
              >
                MENU
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
