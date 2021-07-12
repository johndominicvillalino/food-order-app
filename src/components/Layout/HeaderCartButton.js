import {useContext} from 'react';


import CartIcon from '../Cart/CartIcon'
import CardContext from '../store/cart-context';
import classes from './HeaderCartButton.module.css'


const HeaderCartButton = props => {

    const cartCtx = useContext(CardContext)

    const numberofCartItems = cartCtx.items.reduce((curNumder,item) => {
        return curNumder + item.amount;
    }, 0);

    return <button onClick={props.onClick} className={classes.button}>
        <span className={classes.icon}>
        <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {numberofCartItems}
        </span>
    </button>

}

export default HeaderCartButton;