import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Select } from "@tamagui/select";
import { Adapt } from "@tamagui/adapt";
import { Sheet } from "@tamagui/sheet";
import timeData from "@/Data/availableTimes";
import type { SelectProps } from "@tamagui/select";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useColorScheme } from "./useColorScheme";
import Colors from "../constants/Colors";
import { rV, SIZES } from "@/constants";

const TimeSelector: React.FC = (props: SelectProps) => {
  const [selectedTime, setSelectedTime] = useState<string | undefined>(""); // Initialize as empty
  const [isOpen, setIsOpen] = useState(false); // Control the visibility

  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? "light"];

  useEffect(() => {
    // Only set default time if needed, or remove if it's not necessary
    // setSelectedTime(timeData.times[0]);
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      <Text style={styles.label}>Time to come</Text>
      <Select
        value={selectedTime}
        onValueChange={setSelectedTime}
        open={isOpen} // Control when the list is open
        onOpenChange={setIsOpen} // Control open state
        disablePreventBodyScroll
        {...props}
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
            placeholder="Select time"
          >
            {selectedTime || "Select time"}{" "}
            {/* Conditionally display placeholder */}
          </Select.Value>
        </Select.Trigger>

        <Adapt when="sm" platform="touch">
          <Sheet
            native={!!props.native}
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
            snapPoints={[60]}
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
                Available times
              </Select.Label>
              {React.useMemo(
                () =>
                  timeData.times.map((time, index) => {
                    return (
                      <Select.Item
                        key={time}
                        index={index}
                        value={time}
                        backgroundColor={themeColors.background}
                      >
                        <Select.ItemText color={themeColors.textSecondary}>
                          {time}
                        </Select.ItemText>
                        <Select.ItemIndicator>
                          <AntDesign
                            name="checkcircleo"
                            size={16}
                            color={themeColors.tint}
                          />
                        </Select.ItemIndicator>
                      </Select.Item>
                    );
                  }),
                [timeData, themeColors]
              )}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select>
    </View>
  );
};

export default TimeSelector;
