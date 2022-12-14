import react, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    // recreate array using filter to make sure only correct year is selected
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p> No Expenses Found!</p>; // used if filtered year is empty

  if (filteredExpenses.length > 0) {
    // check to see if filterd year array isn't empty
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id} // MAKE SURE TO ADD KEY TO DYNAMICLY MAPPED ITEMS, TO HELP COMPILER know how to update list
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear} // 2 way binding here
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
