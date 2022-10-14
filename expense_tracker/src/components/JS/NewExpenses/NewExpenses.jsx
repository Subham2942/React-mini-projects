import React, {useState} from "react";

import "../../CSS/NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = ({ onAddExpenseData }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpenseData(expenseData);
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);

  const newExpenseHandler = () =>{
    setShowForm(true);
  }

  const cancelFormHandler = () =>{
    setShowForm(false);
  }

  return (
    <div className="new-expense">
      {!showForm && <button onClick={newExpenseHandler}>Add New Expense</button>}
      {showForm &&< ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {cancelFormHandler}/>}
    </div>
  );
};

export default NewExpenses;
