import React, { useState } from "react";
import "./ExpenseForm.css";

function Expenseform(props) {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    // setUserInput({ ...userInput, enteredTitle: event.target.value });

    //   prevState return previous value of the object we are defining in the starting
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });
    setUserInput((prevState) => {
      return { ...prevState, date: new Date(event.target.value) };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // const expenseData = {
    //   title: enteredTitle,
    //   amount: enteredAmount,
    //   date: new Date(enteredDate),
    // };
    props.onSaveExpanse(userInput);
    // setEnteredTitle("");
    // setEnteredAmount("");
    // setEnteredDate("");
    setUserInput(() => {
      return {
        title: "",
        amount: "",
        date: "",
      };
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            // value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default Expenseform;
