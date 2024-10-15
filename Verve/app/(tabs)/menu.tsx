import React, { useState } from "react";
import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import Colors from "../../constants/Colors";
import { SIZES } from "../../constants";
import { useColorScheme } from "../../components/useColorScheme";
import MealRoute from "../../components/MealRoute";
import DrinksRoute from "../../components/DrinksRoute";
import ComboRoute from "../../components/ComboRoute";

const MenuScreen: React.FC = () => {
  const layout = useWindowDimensions();
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? "light"];

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "meal", title: "Meal" },
    { key: "drinks", title: "Drinks" },
    { key: "combo", title: "Combo" },
  ]);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const handleItemSelect = (item: any) => {
    setSelectedItems((prevSelected) =>
      prevSelected.find((i) => i.id === item.id)
        ? prevSelected.filter((i) => i.id !== item.id)
        : [...prevSelected, item]
    );
  };

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "transparent" }}
      style={{ backgroundColor: "transparent", height: 60 }}
      renderLabel={({ route, focused }) => (
        <Text
          style={[
            focused ? styles.activeTab : styles.inactiveTab,
            {
              fontSize: focused ? SIZES.large : SIZES.medium,
              color: themeColors.text,
            },
          ]}
        >
          {route.title}
        </Text>
      )}
      tabStyle={{ minWidth: 80 }}
    />
  );

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "meal":
        return <MealRoute onItemSelect={handleItemSelect} />;
      case "drinks":
        return <DrinksRoute />;
      case "combo":
        return <ComboRoute />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
      {selectedItems.length > 0 && (
        <View style={styles.viewOrderContainer}>
          <Text style={[styles.viewOrderText, { color: themeColors.tint }]}>
            View Order ({selectedItems.length})
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewOrderContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  activeTab: {
    fontWeight: "bold",
  },
  inactiveTab: {
    fontWeight: "normal",
  },
});

export default MenuScreen;
