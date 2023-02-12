import './ItemCount.css'
import { useState } from 'react';

const ItemCount = () => {
    const [contador, setContador] = useState(0)
    const stock = 24
    const sumar = () => {
        if(stock === contador){
            alert('has llegado al limite del stock')
            return
        }
        setContador (contador +1)
    };
    const restar = () => {
        if(contador === 0){
            return
        }
        setContador(contador -1)
    };
    return (
    <div className="counter">
        <div className="controllers">
            <button onClick={restar}>-</button>
            <div>
                <span>{contador}</span>
            </div>
            <button onClick={sumar}>+</button>
        </div>
        <button>Agregar al carrito</button>
        </div>)
};

export default ItemCount