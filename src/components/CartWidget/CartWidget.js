import './CartWidget.css';
import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { cart } = useContext(CartContext)
    return (
        <div className='copa-container'>
            {cart.length}
            <img src={require('../img/copa.png')} />
            {/* <span className='copa-items'>3</span> */}
        </div>
    );
};

export default CartWidget;
