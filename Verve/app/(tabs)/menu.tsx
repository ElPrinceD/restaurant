import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import colors from '../../constants/Colors'; // Assuming your color scheme is in this file
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons

// Data for the product grid
const productData = [
  { id: '1', category: 'Burger', name: 'Beef Burger', description: 'Beef with cheese', price: '18.00', image: 'https://www.thefarmhouserestaurant.co.uk/wp-content/uploads/2022/11/A34I1229-min-1-scaled.jpg' },
  { id: '2', category: 'Dessert', name: 'Waffles with Fruits', description: 'Waffles with fresh fruits', price: '12.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmpBeARZzs3Yq6jFOgOtLSmooFU2pS2GXoA19yUqwpjdXkcTOSqwjXHrTkhONgDIv2G8&usqp=CAU' },
  { id: '3', category: 'Burger', name: 'Chicken Burger', description: 'Crispy chicken with mayo', price: '15.00', image: 'https://www.thefarmhouserestaurant.co.uk/wp-content/uploads/2024/03/FHS3-61-400x400.jpg' },
  { id: '4', category: 'Dessert', name: 'Fresh Strawberry', description: 'Fresh strawberries with cream', price: '8.00', image: 'https://www.thefarmhouserestaurant.co.uk/wp-content/uploads/2024/02/FHS3-35-1280x720.jpg' },
  { id: '5', category: 'Drink', name: 'Coca-Cola', description: 'Soft drink', price: '2.00', image: 'https://www.thefarmhouserestaurant.co.uk/wp-content/uploads/2022/11/footer-background.jpg' },
  { id: '6', category: 'Combo', name: 'Combo Meal', description: 'Burger, fries and drink', price: '20.00', image: 'https://www.thefarmhouserestaurant.co.uk/wp-content/uploads/2022/09/Bombay-Badboy.jpg' },
  { id: '7', category: 'Burger', name: 'Veggie Burger', description: 'Healthy veggie burger', price: '14.00', image: 'https://www.thefarmhouserestaurant.co.uk/wp-content/uploads/2022/11/A34I1252-min-1280x720.jpg' },
  { id: '8', category: 'Dessert', name: 'Chocolate Cake', description: 'Rich chocolate cake', price: '6.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-IioD3vyETMsS7GTIcchTzB-W3ush4AuVQ&s' },
];

// Meal Route with filter buttons
const MealRoute = ({ onItemSelect }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Function to filter products based on selected category
  const filteredProducts = selectedFilter === 'All'
    ? productData
    : productData.filter(item => item.category === selectedFilter);

  return (
    <View style={styles.tabContainer}>
      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        {['All', 'Burger', 'Dessert', 'Drinks', 'Combo'].map(filter => (
          <TouchableOpacity
            key={filter}
            style={[styles.filterButton, selectedFilter === filter && styles.activeFilterButton]}
            onPress={() => setSelectedFilter(filter)}
          >
            <Icon name={filter === '' ? 'magnifying-glass' : filter === 'Burger' ? 'flash' : filter === 'Dessert' ? 'birthday-cake' : filter === 'Drinks' ? 'glass' : 'tags'} size={16} color={colors.light.textSecondary} style={styles.filterIcon} />
            <Text style={[styles.filterText, selectedFilter === filter && styles.activeFilterText]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Display Total Number of Items */}
      <Text style={styles.itemCountText}>
       {filteredProducts.length} Items
      </Text>

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <TouchableOpacity 
                style={styles.addButton}
                onPress={() => onItemSelect(item)} // Call onItemSelect when adding an item
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>£{item.price}</Text>
          </View>
        )}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};


const DrinksRoute = () => (
  <View style={styles.tabContainer}>
    <Text>Drinks Content</Text>
  </View>
);

const ComboRoute = () => (
  <View style={styles.tabContainer}>
    <Text>Combo Content</Text>
  </View>
);

// Use a custom function to create the SceneMap
const renderScene = ({ route, onItemSelect }) => {
  switch (route.key) {
    case 'meal':
      return <MealRoute onItemSelect={onItemSelect} />;
    case 'drinks':
      return <DrinksRoute />;
    case 'combo':
      return <ComboRoute />;
    default:
      return null; // Handle unknown route
  }
};

const MenuScreen: React.FC = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'meal', title: 'Meal' },
    { key: 'drinks', title: 'Drinks' },
    { key: 'combo', title: 'Combo' },
  ]);
  const [selectedItems, setSelectedItems] = useState([]); // State to track selected items

  const handleItemSelect = (item: { id: any; }) => {
    setSelectedItems(prevSelected => {
      // Check if the item is already selected
      const isSelected = prevSelected.find(i => i.id === item.id);
      if (isSelected) {
        // Remove item if already selected
        return prevSelected.filter(i => i.id !== item.id);
      } else {
        // Add item if not selected
        return [...prevSelected, item];
      }
    });
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'transparent' }} // Remove indicator
      style={{ backgroundColor: 'transparent', height: 60 }} // Set height
      renderLabel={({ route, focused }) => (
        <Text
          style={[
            focused ? styles.activeTab : styles.inactiveTab,
            {
              fontSize: focused ? 18 : 16, // Adjust sizes
              paddingVertical: 10,
              
              paddingRight: 10
            },
          ]}
        >
          {route.title}
        </Text>
      )}
      tabStyle={{ minWidth: 80 }} // Ensure enough width for tabs
    />
  );
  
  

  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={(props) => renderScene({ ...props, onItemSelect: handleItemSelect })} // Pass down the handler
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        style={styles.container}
      />
      {selectedItems.length > 0 && ( // Show View Order button only if items are selected
        <View style={styles.viewOrderContainer}>
          <TouchableOpacity style={styles.viewOrderButton}>
            <Text style={styles.viewOrderText}>View Order</Text>
            <View style={styles.orderCount}>
              <Text style={styles.orderCountText}>{selectedItems.length}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjusted to space between
    paddingVertical: 10,
    paddingHorizontal: 20, // Added horizontal padding
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically centered
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 7,
    backgroundColor: colors.light.background,
  },
  activeFilterButton: {
    backgroundColor: colors.light.tint,
  },
  filterText: {
    fontSize: 14,
    color: colors.light.textSecondary,
    marginLeft: 5, // Space between icon and text
  },
  activeFilterText: {
    color: colors.light.background,
    fontWeight: 'bold',
  },
  productCard: {
    width: '45%',
    margin: 5, // Reduced margin between product cards
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    position: 'relative',
  },
  activeTab: {
    color: colors.light.tint, // Color for the active tab
    fontWeight: 'bold', // Make the active tab text bold
  },
  inactiveTab: {
    color: colors.light.textSecondary, // Color for inactive tabs
    fontWeight: 'normal', // Normal weight for inactive tabs
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: 130,
    height: 130,
    borderRadius: 70,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productDescription: {
    fontSize: 14,
    color: colors.light.textSecondary,
  },
  productPrice: {
    fontSize: 16,
    color: colors.light.tint,
  },
  addButton: {
    position: 'absolute',
    top: 5,
    right: 0,
    backgroundColor: colors.light.text,
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  addButtonText: {
    color: colors.light.background,
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewOrderContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    backgroundColor: 'transparent',
  },
  viewOrderButton: {
    backgroundColor: colors.light.text,
    paddingVertical: 12,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewOrderText: {
    color: colors.light.background,
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderCount: {
    backgroundColor: colors.light.tint,
    marginLeft: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderCountText: {
    color: colors.light.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
  filterIcon: {
    marginRight: 1, // Space between icon and text
  },
  itemCountText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingHorizontal: 30, // Add some horizontal padding
    color: colors.light.textSecondary, // Adjust color as needed
  },
  
});


export default MenuScreen;
