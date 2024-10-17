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

interface ChefsRecommendationProps {
  dishName: string;
  description: string; // Chef's special description or features
  price: string; // Price of the dish
  image: string; // Filename of the image
}

// Dynamically map the image filenames to the require() statements
const imageMap: { [key: string]: any } = {
  "SteakwithPotatoes.png": require("../assets/images/SteakwithPotatoes.png"),
  "food2.png": require("../assets/images/food2.png"),
  "Pizza.png": require("../assets/images/Pizza.png"),
};

const ChefsRecommendation: React.FC<ChefsRecommendationProps> = ({
  dishName,
  description,
  price,
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
      //   maxWidth: rS(150),
      marginRight: rS(2),
    },
    dishName: {
      fontSize: SIZES.medium,
      fontWeight: "bold",
      color: themeColors.text,
      marginBottom: rS(5),
    },
    description: {
      fontSize: SIZES.small,
      color: themeColors.textSecondary,
    },
    priceContainer: {
      justifyContent: "center",
      alignItems: "flex-end",
    },
    price: {
      fontSize: SIZES.large,
      fontWeight: "bold",
      color: themeColors.tint,
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

        {/* Dish Name, Description */}
        <View style={styles.details}>
          <Text style={styles.dishName}>{dishName}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        {/* Price */}
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default ChefsRecommendation;
