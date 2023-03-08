import { Link } from "react-router-dom";
import Item from "../Item/Item";

const ItemList = ({productos}) => {
    return (
        <ul>
            {productos.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}
        </ul>

        
    )
};

export default ItemList;