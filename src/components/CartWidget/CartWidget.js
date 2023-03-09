import './CartWidget.css';
import { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../context/cartContext';

const CartWidget = () => {
    const { cart } = useContext(cartContext)
    const [total, setTotal] = useState(0)

    useEffect(() => {
    setTotal(
        cart?.reduce((prev, curr) =>{
            console.log(prev, curr)
            return prev + curr.quantity
        }, 0)
    )
    }, [cart])
    return (
        <div className='copa-container'>
            {total}
            <img src={require('../img/copa.png')} />
        </div>
    );
};

export default CartWidget;
