import React, {
  useState
} from 'react';

import './App.css';

import Expenses from './components/JS/Expenses/Expenses'
import NewExpenses from "./components/JS/NewExpenses/NewExpenses";

const dummyExpenses = [{
    id: 1,
    title: 'Car Insurance',
    date: new Date(2022, 7, 14),
    price: 20000,
  },
  {
    id: 2,
    title: 'Food',
    date: new Date(2022, 8, 21),
    price: 4000,
  },
  {
    id: 3,
    title: 'College fees',
    date: new Date(2022, 6, 12),
    price: 40000,
  },
  {
    id: 4,
    title: 'Furniture',
    date: new Date(2022, 10, 2),
    price: 5000,
  },
  {
    id: 5,
    title: 'House',
    date: new Date(2020, 12, 3),
    price: 80000,
  },
  {
    id: 6,
    title: 'Hostel',
    date: new Date(2021, 8, 21),
    price: 14000,
  },
  {
    id: 7,
    title: 'Novels',
    date: new Date(2019, 6, 12),
    price: 2000,
  },
  {
    id: 8,
    title: 'Televison',
    date: new Date(2019, 7, 14),
    price: 25000,
  },

]

function App() {

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseDataHandler = (expenseData) => {
    setExpenses(
      prevExpenses => {
        return [expenseData, ...prevExpenses];
      }
    )
  }
  return ( 
  <div className = "App" >
    <NewExpenses 
    onAddExpenseData = {
      addExpenseDataHandler
    }
    />

    <Expenses 
    items={
      expenses
    }
    />  
    </div>
  );
}

export default App;