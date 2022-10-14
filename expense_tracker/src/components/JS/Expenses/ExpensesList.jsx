import React from "react";

import ExpenseItem from "./ExpenseItem";

import "../../CSS/ExpensesList.css";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <p className="expenses-list__fallback"> No Items Found </p>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expenses) => {
        return (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            date={expenses.date}
            price={expenses.price}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
