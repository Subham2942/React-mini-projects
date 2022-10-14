import React from 'react'

import styles from './MealItem.module.css'


const MealItem = ({name,desc,price}) => {
    const formatPrice = `$${price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
        <div>
            <h3>{name}</h3>
            <div className={styles.description}>{desc}</div>
            <div className={styles.price}>{formatPrice}</div>
        </div>
        <div>

        </div>
        
    </li>
  )
}

export default MealItem