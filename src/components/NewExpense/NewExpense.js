import React from "react"; // this technically isn't need, it's automatically done
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div> // above: returns the actual form, New expense just encapsulates into dive with proper classname
  );
};

export default NewExpense;
