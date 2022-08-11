import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 294.67;
  // const [title, setTitle] = useState(props.title);
  // function clickHandler() {
  //   setTitle("updated!");
  //   console.log(title);
  // }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button className="change-btn" onClick={clickHandler}>
        Change title
      </button> */}
    </Card>
  );
}

export default ExpenseItem;
