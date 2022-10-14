import React from "react";
import { useState } from "react";

import "../../CSS/ExpenseForm.css";

const ExpenseForm = ({onSaveExpenseData, onCancel}) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const [enteredPrice, setEnteredPrice] = useState("");

  const priceChangeHandler = (e) => {
    setEnteredPrice(e.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let expenseData;
    if(enteredDate !== "" && enteredPrice !== '' && enteredTitle !== '')
    {
        expenseData = {
        title: enteredTitle,
        price: +enteredPrice,
        date: new Date(enteredDate),
      };
      onSaveExpenseData(expenseData); 
    }
    else
    {
      alert("Invalid Input");
    }
   

    
    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            min="0.01"
            step="0.01"
            onChange={priceChangeHandler}
            value={enteredPrice}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            min="2018-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={onCancel}> Cancel </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
