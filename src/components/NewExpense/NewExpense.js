import React from "react";
import "./NewExpense.css";
import Expenseform from "./ExpenseForm";
function NewExpense(props) {
  const saveExpensesDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <Expenseform onSaveExpanse={saveExpensesDataHandler} />
    </div>
  );
}
export default NewExpense;
