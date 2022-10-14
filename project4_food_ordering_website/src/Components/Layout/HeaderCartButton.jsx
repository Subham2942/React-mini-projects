import React from 'react'

import CartIcon from '../Cart/CartIcon'

import styles from './HeaderCartButton.module.css'

const HeaderCartButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon/>
      </span>
      <span>
        Your Cart
      </span>
      <span className={styles.badge}>
        5
      </span>
    </button>
  )
}

export default HeaderCartButton