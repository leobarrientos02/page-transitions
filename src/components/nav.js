import Burger from '../images/burger.svg';
import ShoppingCart from '../images/shopping-cart.svg';
import {BrowserRouter as Router, Link} from 'react-router-dom'

const Nav = () =>{

    return(
        <nav>
            <img src={Burger} alt="burger-svg" />
            <a href="/">maxed.</a>
            <img src={ ShoppingCart } alt="ShoppingCart" />
        </nav>
    )
};

export default Nav;