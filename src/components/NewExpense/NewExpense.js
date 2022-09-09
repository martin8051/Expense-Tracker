import React from "react"; // this technically isn't need, it's automatically done
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    // this function will be executed in child component, but data returned here
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // good enough for now, ideal you want no repeats
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div> // above: returns the actual form, New expense just encapsulates into dive with proper classname
  );
};

export default NewExpense;
