import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../store/cart-context';

import classes from './Cart.module.css'

const Cart = props => {

    const cartContext = useContext(CartContext)

    const totalAmount = `₱${cartContext.totalAmount.toFixed(2)}`
    const hastItems = cartContext.length > 0;

    const cartItemRemoveHandler = (id) => {
        
        cartContext.remoteItem(id)
    };

    const cartItemAddHandler = (item) => {

        cartContext.addItem(item)
    };

    const cartItems = (<ul className={classes['cart-items']}>{cartContext.items.map(item => {
        return <CartItem 
        key={item.id} 
        name={item.name} 
        amount={item.amount} 
        price={item.price} 
        onRemove={cartItemRemoveHandler.bind(null,item.id)} 
        onAdd={cartItemAddHandler.bind(null,item)}/>
        
    })}</ul>);

    return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span> Total Amount </span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
            {!hastItems && <button className={classes.button}>Order</button>}
        </div>
        
    </Modal>)

}

export default Cart;