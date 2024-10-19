import React from "react";

import { router } from "expo-router"; // Import useRouter for navigation
import { useState } from "react";
import { ScrollView, StyleSheet, ImageBackground } from "react-native";
import { Text, View } from "@/components/Themed";
import Button from "@/components/Button";
import { useColorScheme } from "../../../components/useColorScheme";
import Colors from "../../../constants/Colors";
import { SIZES, rMS, rS, rV } from "../../../constants";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import PreviousOrderItem from "@/components/PreviousOrders";
import previousOrders from "@/Data/PreviousOrders";
import Animated, { FadeInLeft, ReduceMotion } from "react-native-reanimated";
import ChefsRecommendation from "@/components/ChefsRecommendations";
import chefRecommendations from "@/Data/ChefsRecommendationsData";

export default function Home() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? "light"];
  const [isLive, setIsLive] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: rV(10),
      paddingHorizontal: rS(20),
      backgroundColor: themeColors.background,
    },
    welcomeText: {
      fontSize: SIZES.xLarge,
      fontWeight: "bold",
      color: themeColors.text,
      textAlign: "left",
    },
    row: {
      flexDirection: "row",
      gap: 10,
      marginVertical: rV(10),
      alignItems: "center",
    },
    transparentButton: {
      backgroundColor: "transparent",
      borderRadius: 30,
    },
    transparentText: {
      color: themeColors.text,
      fontSize: SIZES.medium,
    },
    reservationButton: {
      backgroundColor: colorScheme === "light" ? "#EEEEEE" : "#3A3B3C",
      borderRadius: 30,
    },
    reservationText: {
      fontSize: SIZES.medium,
      color: colorScheme === "light" ? "#000" : "#B8860B",
    },
    liveButton: {
      backgroundColor: themeColors.errorBackground,
      borderRadius: 20,
      paddingVertical: rV(15),
      paddingHorizontal: rS(25),
      width: rS(100),
      height: rV(130),
      alignItems: "center",
      justifyContent: "center",
    },
    liveText: {
      color: themeColors.errorText,
      fontSize: SIZES.medium,
      fontWeight: "bold",
    },
    mealButton: {
      borderRadius: 20,
      width: rS(100),
      height: rV(130),
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    mealImage: {
      width: rS(100),
      height: rV(130),
      justifyContent: "flex-end",
      alignItems: "center",
    },
    mealText: {
      fontSize: SIZES.large,
      fontWeight: "900",
      color: themeColors.background,
      textAlign: "center",
      marginVertical: rMS(10),
      textShadowColor: themeColors.shadow,
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 1,
      flexWrap: "wrap",
    },
    loyaltyButton: {
      backgroundColor: colorScheme === "light" ? "#EEEEEE" : "#3A3B3C",
      borderRadius: 20,
      paddingVertical: rV(15),
      paddingHorizontal: rS(25),
      width: rS(200),
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    loyaltyText: {
      fontSize: SIZES.medium,
      color: themeColors.text,
    },
    loyaltyNumberContainer: {
      flexDirection: "row",
      alignItems: "baseline",
      backgroundColor: "transparent",
    },
    loyaltyNumber: {
      fontSize: rMS(80),
      fontStyle: "italic",
      fontWeight: "bold",
      color: colorScheme === "light" ? "#000" : "#B8860B",
    },
    previousRow: {
      flexDirection: "row",
      gap: 10,
      marginTop: rV(15),
      alignItems: "center",
    },
    previousOrdersText: {
      flex: 1,
      color: themeColors.text,
      fontSize: SIZES.large,
      fontWeight: "bold",
    },
    seeAllButton: {
      paddingHorizontal: rS(10),
      backgroundColor: "transparent",
    },
    seeAllText: {
      textDecorationLine: "underline",
      color: themeColors.tint,
      fontSize: SIZES.medium,
    },
    previousOrdersContainer: {
      marginBottom: rV(8),
    },
    chefRecommendationHeader: {
      marginTop: rV(25),
      fontSize: SIZES.large,
      fontWeight: "bold",
      color: themeColors.text,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to FarmHouse Coventry</Text>

      <View style={styles.row}>
        <Button
          style={[
            styles.transparentButton,
            { backgroundColor: themeColors.buttonBackground },
          ]}
          onPress={() => router.navigate("/main/menu")} // Add navigation to the "menu" page
        >
          <Text style={styles.transparentText}>
            <MaterialCommunityIcons
              name="food-turkey"
              size={SIZES.medium}
              color={themeColors.text}
            />
            {"  "}
            Menu
          </Text>
        </Button>
        <Button
          style={styles.reservationButton}
          onPress={() => router.navigate("/(MealReservation)/Reservation")} // Add navigation to the "menu" page
        >
          <Text style={styles.reservationText}>
            <Ionicons name="restaurant" size={SIZES.medium} />
            {"  "}
            Reservation
          </Text>
        </Button>
      </View>

      <View style={styles.row}>
        <Animated.View
          entering={FadeInLeft.delay(500)
            .randomDelay()
            .reduceMotion(ReduceMotion.Never)}
        >
          {isLive ? (
            <Button style={styles.liveButton}>
              <Text style={styles.liveText}>Live</Text>
            </Button>
          ) : (
            <Button style={styles.mealButton}>
              <ImageBackground
                source={require("@/assets/images/meal-of-the-day.png")}
                style={styles.mealImage}
              >
                <Text style={styles.mealText}>Meal of the Day</Text>
              </ImageBackground>
            </Button>
          )}
        </Animated.View>

        <Button style={styles.loyaltyButton}>
          <Text style={styles.loyaltyText}>
            <MaterialCommunityIcons
              name="star-three-points"
              size={SIZES.medium}
            />
            {"  "}
            Loyalty Points
          </Text>
          <View style={styles.loyaltyNumberContainer}>
            <Text style={styles.loyaltyNumber}>150</Text>
          </View>
        </Button>
      </View>

      {/* Chef's Recommendations Section */}
      <Text style={styles.chefRecommendationHeader}>
        Chef's Recommendations
      </Text>
      <View>
        {chefRecommendations.map((dish) => (
          <ChefsRecommendation
            key={dish.id}
            dishName={dish.dishName}
            description={dish.description}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </View>

      <View style={styles.previousRow}>
        <Text style={styles.previousOrdersText}>Previous Orders</Text>
        <Button style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All</Text>
        </Button>
      </View>
      <View style={styles.previousOrdersContainer}>
        {previousOrders.map((order) => (
          <PreviousOrderItem
            key={order.id}
            mealName={order.mealName}
            date={order.date}
            loyaltyPoints={order.loyaltyPoints}
            image={order.image}
          />
        ))}
      </View>
    </ScrollView>
  );
}
