interface IIngredient {
  name: string;
  quantity: string;
}

interface IMeal {
  id: string;
  name: string;
  description: string;
  price: number;
  ingredients: IIngredient[];
  amount: number;  // Add amount property
}

export default IMeal;
