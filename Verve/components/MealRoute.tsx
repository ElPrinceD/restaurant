import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import FilterButtons from "./FilterButton";
import ProductCard from "./ProductCard";
import  productData  from "../Data/ProductData";
import { SIZES, rS } from "../constants";

interface MealRouteProps {
  onItemSelect: (item: any) => void;
}

const MealRoute: React.FC<MealRouteProps> = ({ onItemSelect }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProducts =
    selectedFilter === "All"
      ? productData
      : productData.filter((item) => item.category === selectedFilter);

  return (
    <View style={styles.container}>
      <FilterButtons
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <Text style={styles.itemCountText}>{filteredProducts.length} Items</Text>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <ProductCard item={item} onItemSelect={onItemSelect} />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemCountText: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    marginVertical: rS(10),
    paddingHorizontal: rS(30),
  },
});

export default MealRoute;
