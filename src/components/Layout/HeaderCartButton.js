import { useContext, useEffect, useState } from 'react';


import CartIcon from '../Cart/CartIcon'
import CardContext from '../store/cart-context';
import classes from './HeaderCartButton.module.css'


const HeaderCartButton = props => {

    const cartCtx = useContext(CardContext)

    const { items } = cartCtx;
    const [isBtnIsHighLighted, setBtnIsHighlighted] = useState(false)


    useEffect(() => {

        if (items.length === 0) {
            return;
        }

        setBtnIsHighlighted(true)

        const timer = setTimeout(() => {

            setBtnIsHighlighted(false)

        }, 300)

        return () => {
            clearTimeout(timer)
        }

    },[items])

    const btnClasses = `${classes.button} ${isBtnIsHighLighted ? classes.bump : ''}`

    const numberofCartItems = cartCtx.items.reduce((curNumder, item) => {
        return curNumder + item.amount;
    }, 0);

    return <button onClick={props.onClick} className={btnClasses}>
        <span className={classes.btnClasses}>
            <CartIcon />
        </span>
        <span>
            Bayronon!
        </span>
        <span className={classes.badge}>
            {numberofCartItems}
        </span>
    </button>

}

export default HeaderCartButton;