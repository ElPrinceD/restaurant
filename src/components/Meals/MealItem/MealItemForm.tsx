import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.scss";

const MealItemForm = (props: any) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: any) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current?.value;
    let enteredAmountNumber = 1;

    if (enteredAmount) {
      enteredAmountNumber = +enteredAmount;

      if (
        enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 2000  // Allow only less than 5
      ) {
        setAmountIsValid(false);
        return;
      }
    }

    // Pass the entered amount to the parent component
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* <Input
        ref={amountInputRef}
        label="Total"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "2000",  // Updated max value
          step: "1",
          defaultValue: "1",
        }}
      /> */}
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-4).</p>}
    </form>
  );
};

export default MealItemForm;
