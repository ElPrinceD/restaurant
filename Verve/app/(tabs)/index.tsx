import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import Button from "@/components/Button";
import { useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import { SIZES, rMS, rS, rV } from "../../constants";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? "light"];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
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
    pointsText: {
      fontSize: SIZES.medium,
      color: themeColors.text,
      fontWeight: "bold",
      marginLeft: rMS(5),
    },
    previousRow: {
      flexDirection: "row",
      gap: 10,
      marginVertical: rV(25),
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
  });

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to FarmHouse Coventry</Text>

      <View style={styles.row}>
        <Button
          style={[
            styles.transparentButton,
            { backgroundColor: themeColors.buttonBackground },
          ]}
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
        <Button style={styles.reservationButton}>
          <Text style={styles.reservationText}>
            <Ionicons name="restaurant" size={SIZES.medium} />
            {"  "}
            Reservation
          </Text>
        </Button>
      </View>

      <View style={styles.row}>
        <Button style={styles.liveButton}>
          <Text style={styles.liveText}>Live</Text>
        </Button>

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
            <Text style={styles.loyaltyNumber}>100</Text>
            {/* <Text style={styles.pointsText}>points</Text> */}
          </View>
        </Button>
      </View>

      <View style={styles.previousRow}>
        <Text style={styles.previousOrdersText}>Previous Orders</Text>
        <Button style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All</Text>
        </Button>
      </View>
    </View>
  );
}
