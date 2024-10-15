import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../constants/Colors";
import { SIZES, rS } from "../constants";
import { useColorScheme } from "./useColorScheme";

interface FilterButtonsProps {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  selectedFilter,
  setSelectedFilter,
}) => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? "light"];

  const filterOptions = ["All", "Burger", "Dessert", "Drinks", "Combo"];

  return (
    <View style={styles.container}>
      {filterOptions.map((filter) => (
        <TouchableOpacity
          key={filter}
          style={[
            styles.button,
            selectedFilter === filter && { backgroundColor: themeColors.tint },
          ]}
          onPress={() => setSelectedFilter(filter)}
        >
          <Icon
            name={
              filter === "Burger"
                ? "flash"
                : filter === "Dessert"
                ? "birthday-cake"
                : filter === "Drinks"
                ? "glass"
                : "tags"
            }
            size={16}
            color={themeColors.textSecondary}
            style={styles.icon}
          />
          <Text
            style={[
              styles.text,
              selectedFilter === filter && {
                color: themeColors.background,
                fontWeight: "bold",
              },
            ]}
          >
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: rS(10),
    paddingHorizontal: rS(20),
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: rS(8),
    paddingVertical: rS(10),
    borderRadius: 7,
  },
  icon: {
    marginRight: rS(5),
  },
  text: {
    fontSize: SIZES.small,
  },
});

export default FilterButtons;
