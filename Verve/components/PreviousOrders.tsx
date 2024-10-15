import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  ImageStyle,
  ViewStyle,
} from "react-native";
import { SIZES, rMS, rS } from "../constants";
import { useColorScheme } from "./useColorScheme";
import Colors from "../constants/Colors";
import { format, isToday, isYesterday } from "date-fns";

interface PreviousOrderItemProps {
  mealName: string;
  date: string; // The order date as a string
  loyaltyPoints: number;
  image: string; // Filename of the image
}

// Dynamically map the image filenames to the require() statements
const imageMap: { [key: string]: any } = {
  "SteakwithPotatoes.png": require("../assets/images/SteakwithPotatoes.png"),
  "food2.png": require("../assets/images/food2.png"),
  "Pizza.png": require("../assets/images/Pizza.png"),
};

const PreviousOrderItem: React.FC<PreviousOrderItemProps> = ({
  mealName,
  date,
  loyaltyPoints,
  image,
}) => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? "light"];

  // For background color animation
  const [isPressed, setIsPressed] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  // Background color animation effect
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isPressed ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isPressed]);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["transparent", themeColors.card] as string[], // Cast to string array
  });

  // Date formatting
  const formatOrderDate = (dateString: string): string => {
    const orderDate = new Date(dateString);
    const today = new Date();

    if (isToday(orderDate)) {
      return "Today";
    } else if (isYesterday(orderDate)) {
      return "Yesterday";
    } else if (orderDate.getFullYear() === today.getFullYear()) {
      // If it's in the same year, format without the year
      return format(orderDate, "EEE, MMM d");
    } else {
      // If it's a different year, include the year
      return format(orderDate, "EEE, MMM d yyyy");
    }
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      padding: rMS(5),
      borderRadius: 10,
      marginVertical: rS(10),
      alignItems: "center",
      backgroundColor: backgroundColor as unknown as string, // Cast to string for compatibility
    } as ViewStyle, // Specify the style type for View
    image: {
      width: rS(40),
      height: rS(40),
      borderRadius: rS(30), // Round image
      marginRight: rS(15),
    } as ImageStyle, // Specify the style type for Image
    details: {
      flex: 1,
    },
    mealName: {
      fontSize: SIZES.medium,
      fontWeight: "bold",
      color: themeColors.text,
      marginBottom: rS(5),
    },
    date: {
      fontSize: SIZES.small,
      color: themeColors.textSecondary,
    },
    pointsContainer: {
      justifyContent: "center",
      alignItems: "flex-end",
    },
    points: {
      fontSize: SIZES.large,
      fontWeight: "bold",
      color: themeColors.tint,
    },
    pointsText: {
      fontSize: SIZES.small,
      color: themeColors.textSecondary,
    },
  });

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={() => {
        // Handle button press logic
      }}
    >
      <Animated.View style={styles.container}>
        {/* Round Image */}
        <Image source={imageMap[image]} style={styles.image} />

        {/* Food Name and Date */}
        <View style={styles.details}>
          <Text style={styles.mealName}>{mealName}</Text>
          <Text style={styles.date}>{formatOrderDate(date)}</Text>
        </View>

        {/* Points */}
        <View style={styles.pointsContainer}>
          <Text style={styles.points}>+{loyaltyPoints}</Text>
          <Text style={styles.pointsText}>points</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default PreviousOrderItem;
