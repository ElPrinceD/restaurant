import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.scss";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Biryani",
    description: "Aromatic rice with tender chicken, blended with spices",
    price: 22.99,
    ingredients: [
      { name: "Rice", quantity: "2 cups" },
      { name: "Chicken", quantity: "500g" },
      { name: "Biryani Masala", quantity: "2 tbsp" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Onions", quantity: "2 large" },
    ],
  },
  {
    id: "m2",
    name: "Fish Pakora",
    description: "Crispy fried fish, coated in a spicy gram flour batter",
    price: 16.5,
    ingredients: [
      { name: "Fish Fillet", quantity: "500g" },
      { name: "Gram Flour", quantity: "1 cup" },
      { name: "Cumin Powder", quantity: "1 tsp" },
      { name: "Chili Powder", quantity: "1 tsp" },
      { name: "Coriander Leaves", quantity: "1/4 cup" },
    ],
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "Juicy burger with smoky barbecue sauce, topped with fresh veggies",
    price: 12.99,
    ingredients: [
      { name: "Beef Patty", quantity: "1" },
      { name: "Barbecue Sauce", quantity: "2 tbsp" },
      { name: "Lettuce", quantity: "1 leaf" },
      { name: "Tomato", quantity: "1 slice" },
      { name: "Burger Bun", quantity: "1" },
    ],
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "A nourishing bowl of fresh greens, veggies, and avocado",
    price: 18.99,
    ingredients: [
      { name: "Spinach", quantity: "1 cup" },
      { name: "Avocado", quantity: "1" },
      { name: "Cucumber", quantity: "1/2" },
      { name: "Quinoa", quantity: "1/2 cup" },
      { name: "Lemon Juice", quantity: "1 tbsp" },
    ],
  },
  {
    id: "m5",
    name: "Shawarma",
    description: "Middle Eastern marinated meat, grilled and wrapped in flatbread",
    price: 14.99,
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Shawarma Spice Mix", quantity: "2 tbsp" },
      { name: "Garlic Sauce", quantity: "2 tbsp" },
      { name: "Pickles", quantity: "1/4 cup" },
      { name: "Flatbread", quantity: "2" },
    ],
  },
  {
    id: "m6",
    name: "Lamb Karahi",
    description: "Tender lamb cooked with tomatoes, garlic, ginger, and spices",
    price: 9.99,
    ingredients: [
      { name: "Lamb", quantity: "500g" },
      { name: "Tomatoes", quantity: "3 medium" },
      { name: "Ginger Garlic Paste", quantity: "1 tbsp" },
      { name: "Green Chilies", quantity: "2" },
      { name: "Coriander Leaves", quantity: "1/4 cup" },
    ],
  },
  {
    id: "m7",
    name: "Chicken Biryani",
    description: "Aromatic rice with tender chicken, blended with rich Indian spices",
    price: 15.99,
    ingredients: [
      { name: "Rice", quantity: "2 cups" },
      { name: "Chicken", quantity: "500g" },
      { name: "Biryani Masala", quantity: "2 tbsp" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Onions", quantity: "2 large" },
    ],
  },
  {
    id: "m8",
    name: "Paneer Tikka",
    description: "Grilled Indian cheese cubes marinated in yogurt and spices",
    price: 12.5,
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tikka Masala", quantity: "2 tbsp" },
      { name: "Bell Peppers", quantity: "1" },
      { name: "Onion", quantity: "1" },
    ],
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
