import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ProgressBar from "../../components/ProgressBar";
import DateSelector from "../../components/DateSelector";
import TimeSelector from "../../components/TimeSelector";
import PeopleSelector from "../../components/PeopleSelector";
import Button from "@/components/Button";
import { useColorScheme } from "../../components/useColorScheme";
import Colors from "../../constants/Colors";
import { rS, rV, SIZES } from "@/constants";
import { AntDesign } from "@expo/vector-icons"; // Add AntDesign from Expo
import { useNavigation } from "@react-navigation/native";

const Reservation: React.FC = () => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? "light"];

  const handleNextStep = () => {
    if (step < 6) setStep(step + 1);
  };

  // Add `step` to the useEffect dependency array to trigger a re-render when `step` changes
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ flex: 1 }}>
          <ProgressBar step={step} totalSteps={5} />
        </View>
      ),
      headerShown: true,
      headerShadowVisible: false,
      headerBackVisible: false,
      headerStyle: {
        backgroundColor: themeColors.background,
      },
    });
  }, [step, navigation, themeColors.background]); // Add `step` and `themeColors.background` as dependencies

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: themeColors.background,
    },
    heading: {
      color: themeColors.text,
      fontSize: SIZES.xLarge,
      fontWeight: "bold",
      padding: 10,
      marginVertical: rV(20),
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    buttonIcon: {
      marginLeft: 10, // Space between text and icon
    },
  });

  return (
    <View style={styles.container}>
      {step === 1 && (
        <View>
          <Text style={styles.heading}>What Time, How Many?</Text>
          <View style={styles.row}>
            <DateSelector />
            <TimeSelector />
          </View>
          <View style={styles.row}>
            <PeopleSelector />
          </View>
        </View>
      )}

      <Button
        onPress={handleNextStep}
        style={{
          backgroundColor: themeColors.text,
          position: "absolute",
          bottom: rV(20),
          left: rS(50),
          width: rS(240),
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              color: themeColors.tint,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Proceed
          </Text>
          <AntDesign
            name="rightcircleo"
            size={20}
            color={themeColors.tint}
            style={styles.buttonIcon}
          />
        </View>
      </Button>
    </View>
  );
};

export default Reservation;
