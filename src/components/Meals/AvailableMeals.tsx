import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.scss";
import IMeal from "../../types/IMeal";

const DUMMY_MEALS: IMeal[] = [
  {
    id: "m1",
    name: "Greek Salad",
    description: "Aromatic rice with tender chicken, blended with spices",
    price: 22.99,
    ingredients: [
      { name: "Rice", quantity: "2 cups" },
      { name: "Chicken", quantity: "500g" },
      { name: "Biryani Masala", quantity: "2 tbsp" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Onions", quantity: "2 large" },
    ],
    amount: 1,
    type: "salads",  // Add type
  },
  {
    id: "m2",
    name: "Russian Salad",
    description: "Crispy fried fish, coated in a spicy gram flour batter",
    price: 16.5,
    ingredients: [
      { name: "Fish Fillet", quantity: "500g" },
      { name: "Gram Flour", quantity: "1 cup" },
      { name: "Cumin Powder", quantity: "1 tsp" },
      { name: "Chili Powder", quantity: "1 tsp" },
      { name: "Coriander Leaves", quantity: "1/4 cup" },
    ],
    amount: 1,
    type: "salads",  // Add type
  },
  {
    id: "m3",
    name: "Pasta Salad",
    description: "Juicy burger with smoky barbecue sauce, topped with fresh veggies",
    price: 12.99,
    ingredients: [
      { name: "Beef Patty", quantity: "1" },
      { name: "Barbecue Sauce", quantity: "2 tbsp" },
      { name: "Lettuce", quantity: "1 leaf" },
      { name: "Tomato", quantity: "1 slice" },
      { name: "Burger Bun", quantity: "1" },
    ],
    amount: 1,
    type: "salads",  // Add type
  },
  {
    id: "m4",
    name: "Excellency White Salad",
    description: "A nourishing bowl of fresh greens, veggies, and avocado",
    price: 18.99,
    ingredients: [
      { name: "Spinach", quantity: "1 cup" },
      { name: "Avocado", quantity: "1" },
      { name: "Cucumber", quantity: "1/2" },
      { name: "Quinoa", quantity: "1/2 cup" },
      { name: "Lemon Juice", quantity: "1 tbsp" },
    ],
    amount: 1,
    type: "salads",  // Add type
  },
  {
    id: "m5",
    name: "Shirazi Salad",
    description: "Middle Eastern marinated meat, grilled and wrapped in flatbread",
    price: 14.99,
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Shawarma Spice Mix", quantity: "2 tbsp" },
      { name: "Garlic Sauce", quantity: "2 tbsp" },
      { name: "Pickles", quantity: "1/4 cup" },
      { name: "Flatbread", quantity: "2" },
    ],
    amount: 1,
    type: "salads",  // Add type
  },
  {
    id: "m6",
    name: "Chilli Sauce",
    description: "Tender lamb cooked with tomatoes, garlic, ginger, and spices",
    price: 9.99,
    ingredients: [
      { name: "Lamb", quantity: "500g" },
      { name: "Tomatoes", quantity: "3 medium" },
      { name: "Ginger Garlic Paste", quantity: "1 tbsp" },
      { name: "Green Chilies", quantity: "2" },
      { name: "Coriander Leaves", quantity: "1/4 cup" },
    ],
    amount: 1,
    type: "sauces",  // Add type
  },
  {
    id: "m7",
    name: "Mint Sauce",
    description: "Aromatic rice with tender chicken, blended with rich Indian spices",
    price: 15.99,
    ingredients: [
      { name: "Rice", quantity: "2 cups" },
      { name: "Chicken", quantity: "500g" },
      { name: "Biryani Masala", quantity: "2 tbsp" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Onions", quantity: "2 large" },
    ],
    amount: 1,
    type: "sauces",  // Add type
  },
  {
    id: "m8",
    name: "Punjabi",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "sauces",  // Add type
  },
  {
    id: "m8",
    name: "Raita",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "sauces",  // Add type
  },
  {
    id: "m8",
    name: "Mango Chutney",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "sauces",  // Add type
  },
  {
    id: "m8",
    name: "Yoghurt",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "sauces",  // Add type
  },
  {
    id: "m8",
    name: "Whole Lamb leg",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "starters",  // Add type
  },
  {
    id: "m8",
    name: "Per-Peri Chicken",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "starters",  // Add type
  },
  {
    id: "m8",
    name: "Dynamite Chicken",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "starters",  // Add type
  },
  {
    id: "m8",
    name: "Kobedeh Kebab",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "starters",  // Add type
  },
  {
    id: "m8",
    name: "Grilled Fish",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "starters",  // Add type
  },
  {
    id: "m8",
    name: "Peri Salted Chips",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "starters",  // Add type
  },
  {
    id: "m8",
    name: "Garlix & Sage Roasted Potatoes",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "starters",  // Add type
  },
  {
    id: "m8",
    name: "Samosa Chat",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "starters",  // Add type
  },

  {
    id: "m8",
    name: "Chicken Drumsticks",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "starters",  // Add type
  },
  {
    id: "m8",
    name: "Full Charga",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "starters",  // Add type
  },
  {
    id: "m8",
    name: "Sheesh Kebab",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "starters",  // Add type
  },
  
  {
    id: "m8",
    name: "Chapli Kebab",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "starters",  // Add type
  },
  {
    id: "m8",
    name: "Fish Pakora",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "starters",  // Add type
  },
  {
    id: "m8",
    name: "Chilli Roasted Potatoes",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "starters",  // Add type
  },
  {
    id: "m8",
    name: "Onion Bhaji",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "starters",  // Add type
  },
  {
    id: "m8",
    name: "Chicken Tikka",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "starters",  // Add type
  },
  {
    id: "m8",
    name: "Chicken Karahi",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "curries",  // Add type
  },
  {
    id: "m8",
    name: "Butter Chicken",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "curries",  // Add type
  },
  {
    id: "m8",
    name: "Chicken Tikka Masala",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "curries",  // Add type
  },
  {
    id: "m8",
    name: "Chicken Jalfrezi",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "curries",  // Add type
  },
  {
    id: "m8",
    name: "Chicken Korma",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "curries",  // Add type
  },
  {
    id: "m8",
    name: "Lamb Karahi",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "curries",  // Add type
  },
  {
    id: "m8",
    name: "Lamb Korma",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "curries",  // Add type
  },
  {
    id: "m8",
    name: "Saag Ghosht",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "curries",  // Add type
  },
  {
    id: "m8",
    name: "Dhaal Makhani",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "curries",  // Add type
  },
  {
    id: "m8",
    name: "Tharka Dhaal",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "curries",  // Add type
  },
  {
    id: "m8",
    name: "Channa Masala",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "curries",  // Add type
  },
  {
    id: "m8",
    name: "Veg Achari Balti",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "curries",  // Add type
  },
  {
    id: "m8",
    name: "Chicken Biryani",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "rice",  // Add type
  },
  {
    id: "m8",
    name: "Lamb Biryani",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "rice",  // Add type
  },
  {
    id: "m8",
    name: "Vegetable Biryani",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "rice",  // Add type
  },
  {
    id: "m8",
    name: "Lamb Pilau",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "rice",  // Add type
  },
  {
    id: "m8",
    name: "Chicken Pilau",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "rice",  // Add type
  },
  {
    id: "m8",
    name: "Chickpea Pilau",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
    amount: 1,
    type: "rice",  // Add type
  },
];





const AvailableMeals = () => {
  const mealsList = (
    <ul>
      {DUMMY_MEALS.map((meal) => (
        <MealItem key={meal.id} item={meal} />
      ))}
    </ul>
  );

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
