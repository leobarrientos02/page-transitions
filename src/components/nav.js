import Burger from '../images/burger.svg';
import ShoppingCart from '../images/shopping-cart.svg';

const Nav = () =>{

    return(
        <nav>
            <img src={Burger} alt="burger-svg" />
            <a className='logo' href="/">maxed.</a>
            <img src={ ShoppingCart } alt="ShoppingCart" />
        </nav>
    )
};

export default Nav;