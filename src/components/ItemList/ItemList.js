import { Link } from "react-router-dom";
import Item from "../Item/Item";

const ItemList = ({products}) => {
    return (
        <ul>
            {products.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}
        </ul>

        
    )
};

export default ItemList;