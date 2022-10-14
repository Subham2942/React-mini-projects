import React, { useState } from "react";

import Card from "../UI/Card";
import "../../CSS/Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

import ExpensesChart from "./ExpensesChart";

const Expenses = ({ items }) => {
  const [filterYear, setFilterYear] = useState("All");

  const filterChange = (selectedYear) => {
    console.log("Expense.js");
    setFilterYear(selectedYear);
  };
  const filteredExpense = items.filter((expense) => {
    if (filterYear === "All") return items;
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterYearValue={filterYear}
        onChangeFilter={filterChange}
      />

      <ExpensesChart expenses={filteredExpense}/>

      {/* dynamically rendered expenses list */}

      <ExpensesList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
