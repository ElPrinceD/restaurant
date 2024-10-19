import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Select } from "@tamagui/select";
import { Adapt } from "@tamagui/adapt";
import { Sheet } from "@tamagui/sheet";
import peopleOptionsData from "@/Data/peopleOptions";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useColorScheme } from "./useColorScheme";
import Colors from "../constants/Colors";
import { SIZES, rS, rV } from "@/constants";

const PeopleSelector: React.FC = () => {
  const [selectedPeople, setSelectedPeople] = useState<string | undefined>(""); // Initialize as empty
  const [isOpen, setIsOpen] = useState(false); // Control the visibility

  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? "light"];

  useEffect(() => {
    // Optionally set default value later if needed
    // setSelectedPeople(peopleOptionsData.options[0]);
  }, []);

  const styles = StyleSheet.create({
    container: {
      width: rS(160),
      padding: 10,
    },
    label: {
      fontSize: SIZES.large,
      marginBottom: 8,
      color: themeColors.text,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Number of people</Text>
      <Select
        value={selectedPeople}
        onValueChange={setSelectedPeople}
        open={isOpen} // Control the list visibility
        onOpenChange={setIsOpen} // Control open state
        disablePreventBodyScroll
      >
        <Select.Trigger
          style={{
            backgroundColor: colorScheme === "light" ? "#EEEEEE" : "#3A3B3C",
            borderColor: "transparent",
          }}
        >
          <Select.Value
            style={{
              color: themeColors.text,
              fontWeight: "bold",
              justifyItems: "center",
              fontSize: 16,
            }}
            placeholder="Select number"
          >
            {selectedPeople || "Select number"}
            {/* Conditionally display placeholder */}
          </Select.Value>
        </Select.Trigger>

        <Adapt when="sm" platform="touch">
          <Sheet
            modal
            dismissOnSnapToBottom
            open={isOpen} // Link sheet visibility to isOpen
            onOpenChange={setIsOpen} // Close when user dismisses
            animationConfig={{
              type: "spring",
              damping: 22,
              mass: 1.2,
              stiffness: 220,
            }}
            snapPoints={[50]}
          >
            <Sheet.Frame
              style={{
                backgroundColor: themeColors.background,
              }}
            >
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay
              animation="lazy"
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>

        <Select.Content>
          <Select.Viewport
            animation="quick"
            animateOnly={["transform", "opacity"]}
            enterStyle={{ o: 0, y: -10 }}
            exitStyle={{ o: 0, y: 10 }}
          >
            <Select.Group>
              <Select.Label
                style={{
                  color: themeColors.text,
                  backgroundColor: themeColors.background,
                  fontWeight: "bold",
                  fontSize: SIZES.large,
                }}
              >
                Number of people
              </Select.Label>
              {React.useMemo(
                () =>
                  peopleOptionsData.options.map((option, index) => (
                    <Select.Item
                      key={option}
                      index={index}
                      value={option}
                      backgroundColor={themeColors.background}
                    >
                      <Select.ItemText color={themeColors.textSecondary}>
                        {option}
                      </Select.ItemText>
                      <Select.ItemIndicator>
                        <AntDesign
                          name="checkcircleo"
                          size={16}
                          color={themeColors.tint}
                        />
                      </Select.ItemIndicator>
                    </Select.Item>
                  )),
                [peopleOptionsData]
              )}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select>
    </View>
  );
};

export default PeopleSelector;
