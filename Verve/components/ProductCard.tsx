import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { SIZES, rS } from "../constants";
import { useColorScheme } from "./useColorScheme";

interface ProductCardProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
  };
  onItemSelect: (item: any) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, onItemSelect }) => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? "light"];

  return (
    <TouchableOpacity onPress={() => onItemSelect(item)} style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.name, { color: themeColors.text }]}>
          {item.name}
        </Text>
        <Text style={[styles.description, { color: themeColors.textSecondary }]}>
          {item.description}
        </Text>
        <Text style={[styles.price, { color: themeColors.tint }]}>
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: rS(10),
    backgroundColor: "white",
    borderRadius: rS(10),
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: rS(150),
    backgroundColor: Colors.light.background,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    padding: rS(10),
  },
  name: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
  description: {
    fontSize: SIZES.small,
    marginVertical: rS(5),
  },
  price: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
});

export default ProductCard;
