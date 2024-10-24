interface IIngredient {
  name: string;
  quantity: string;
}

type MealType = 'salads' | 'sauces' | 'starters' | 'curries' | 'rice';

interface IMeal {
  id: string;
  name: string;
  description: string;
  price: number;
  ingredients: IIngredient[];
  amount: number;  // Add amount property
  type: MealType;  // Add type property
}

export default IMeal;
