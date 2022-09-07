import react, { useState } from "react";
// this returns the actual form that is going to be wrapped in a div
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState(""); // used to store update title
  const [enteredAmount, setEnteredAmount] = useState(""); // used to store amount
  const [enteredDate, setEnteredDate] = useState(""); // used to store date

  // functions to call on event handlers
  function titleChangeHandler(event) {
    // called by onChange (every key stroke), event is typicall Javascript that contains lots of values/params
    setEnteredTitle(event.target.value); // on each call update the stored title with the event -> value which holds the user input
  }

  // alt definition format
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
