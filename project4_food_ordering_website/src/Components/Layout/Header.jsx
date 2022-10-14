import React from 'react'

import mealsImage from '../../Assets/mealsImage.jpg'

import HeaderCartButton from './HeaderCartButton'

import styles from './Header.module.css'

const Header = () => {
  return (
    <React.Fragment>
        <header className={styles.header}>
            <h1>React Meals</h1>
            <HeaderCartButton/>
        </header>
        <div className={styles['main-image']}>
            <img src={mealsImage} alt="Food" />
        </div>
    </React.Fragment>
  )
}

export default Header