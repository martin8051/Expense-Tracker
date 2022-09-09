import react, { useState } from "react";
// this returns the actual form that is going to be wrapped in a div
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState(""); // used to store update title
  const [enteredAmount, setEnteredAmount] = useState(""); // used to store amount
  const [enteredDate, setEnteredDate] = useState(""); // used to store date

  // NOTE 33: FOR MULTIPLE ITEMS IN ONE STATE
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // functions to call on event handlers
  function titleChangeHandler(event) {
    // called by onChange (every key stroke), event is typicall Javascript that contains lots of values/params
    setEnteredTitle(event.target.value); // on each call update the stored title with the event -> value which holds the user input

    // NOTE 33: USED FOR ONE STATE MULTIPLE ITEMS
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value};
    // });
  }

  // alt definition format
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    // what do do when you hit submit
    event.preventDefault(); // used to prevent refresh of page
    const expenseData = {
      // create object with all form input values
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData); // output object
    setEnteredTitle(""); // reset entered inputs. needs a 2 way binding set up which is value attribute on <input>
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} // this is the 2 way bind here
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount} // 2 way bind used to reset values on submit
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
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
