import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { Sheet } from "@tamagui/sheet";
import Button from "./Button";
import { useColorScheme } from "./useColorScheme";
import Colors from "@/constants/Colors";
import { rV, SIZES } from "@/constants";

const DateSelector: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [selected, setSelected] = useState(
    selectedDate.toISOString().split("T")[0]
  );

  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? "light"];

  useEffect(() => {
    setSelected(selectedDate.toISOString().split("T")[0]);
  }, [selectedDate]);

  // Function to format the date as "Day, Month Date, Year"
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleDateChange = (day: any) => {
    const date = new Date(day.timestamp);
    setSelectedDate(date);
    setSelected(day.dateString);
    setShowCalendar(false); // Close bottom sheet after selecting a date
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    label: {
      fontSize: SIZES.large,
      marginBottom: rV(8),
      color: themeColors.text,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Date to come</Text>
      <Button
        title={formatDate(selectedDate)} // Display formatted date on the button
        onPress={() => setShowCalendar(true)} // Open the bottom sheet
        style={{
          backgroundColor: colorScheme === "light" ? "#EEEEEE" : "#3A3B3C",
          paddingVertical: 11,
          alignItems: "flex-start",
          borderRadius: 8,
        }}
      />

      <Sheet
        modal
        open={showCalendar}
        onOpenChange={setShowCalendar} // Control the sheet visibility
        dismissOnSnapToBottom
        snapPoints={[40]} // Adjust the size of the sheet
        animationConfig={{
          type: "spring",
          damping: 22,
          mass: 1,
          stiffness: 200,
        }}
      >
        <Sheet.Frame
          style={{
            backgroundColor: themeColors.background,
            padding: 10,
          }}
        >
          <Sheet.ScrollView>
            <Calendar
              onDayPress={handleDateChange}
              enableSwipeMonths={true}
              markedDates={{
                [selected]: {
                  selected: true,
                  selectedColor: themeColors.background,
                },
              }}
              theme={{
                backgroundColor: themeColors.tint,
                calendarBackground: themeColors.background,
                textSectionTitleColor: themeColors.text,
                selectedDayTextColor: "#1434A4",
                todayTextColor: "#FF6347",
                dayTextColor: themeColors.text,
                textDisabledColor: "#ccc",
                monthTextColor: themeColors.text,
                arrowColor: themeColors.text,
                textMonthFontWeight: "bold",
                textMonthFontSize: SIZES.large,
                textDayHeaderFontWeight: "bold",
              }}
            />
          </Sheet.ScrollView>
        </Sheet.Frame>
        <Sheet.Overlay
          animation="quick"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
      </Sheet>
    </View>
  );
};

export default DateSelector;
