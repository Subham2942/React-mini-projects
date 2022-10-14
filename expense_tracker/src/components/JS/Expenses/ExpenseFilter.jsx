
import React from 'react';

import '../../CSS/ExpenseFilter.css';

const ExpensesFilter = ({onChangeFilter, filterYearValue}) => {
    const filterChangeHandler = (e)=>{
        onChangeFilter(e.target.value);
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={filterYearValue} onChange={filterChangeHandler}>
          <option value='All'>All</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;