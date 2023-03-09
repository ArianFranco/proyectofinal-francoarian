import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react"; 
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
    const {addItem} = useContext (CartContext)
    const [contador,setContador] = useState(1)
    const stock = 5

    const getNumRandom = (numero) => {
        console.log('El numero es' + numero)
    }
    return (
        <div width="200" className="product">
            <img alt={product.title} src={product.image} width="200" />
            <h2>Productos para agregar al carrito {contador}</h2>
            <h2>{product.title}</h2>
            <h3>{product.category}</h3>
            <h3>{product.description}</h3>
            <ItemCount
            contador={contador}
            actualizaValor={setContador}
            stock={stock}
            getNumRandom={getNumRandom} 
            />
            <div>
                <button onClick={() => addItem(product, contador)}> Agregar al carrito </button>
            </div>
        </div>

    )
}
export default ItemDetail