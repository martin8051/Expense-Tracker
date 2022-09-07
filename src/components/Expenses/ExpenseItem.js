import React, { useState } from "react"; // use state is function brought in from the react library

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title); // this is a hook, all hooks start with use, must be used inside of first component function, never nested
  //returns array. first value is starting value, second value is function name to update value 'SetTitle'

  function clickHandler() {
    // define function that's used when event handler is called 'onClick'
    setTitle("Updated!"); // use defined funciton to update value
  }

  // alt method using inline arrow function naming convention
  //const clickHandler = () =>{};

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card> // add event above, dont need () cause it will trigger call on parse
  );
}

export default ExpenseItem;
