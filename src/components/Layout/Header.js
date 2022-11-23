import { Fragment } from 'react'
import Classes from './Header.module.css'
import mealsImage from '../../assets/header.jpg'
import HeaderCartButton from './HeaderCartButton'
import logo from '../../assets/logo_color.svg'

const Header = (props) => {
  return (
    <Fragment>
      <header className={Classes.header}>
        <img src={logo} alt='' />
        {/* <h1>ReactMeals</h1> */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={Classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  )
}

export default Header
