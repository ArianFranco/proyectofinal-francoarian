import ItemCount from '../../components/ItemCount/ItemCount'
import ItemList from '../../components/ItemList/ItemList'
import { useEffect, useState } from "react";

const arreglo = [
    { name: 'producto 1', id: 'sj323' },
    { name: 'producto 2', id: 'sj323' },
    { name: 'producto 3', id: 'sj323' },
    { name: 'producto 4', id: 'sj323' },
    { name: 'producto 5', id: 'sj323' },
    { name: 'producto 6', id: 'sj323' },
];

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

const getProducs = () => fetch('https://fakestoreapi.com/products', {
    method: 'GET'
})


useEffect(() => {
    getProducs
    .then((res) => {
        return res.json();
    })
    .then((response) => {
        setProducts(response);
    })
    .catch((error) => console.log(error));
})

// return (
//      <div>
//          {greeting}
//          <ItemCount />
//          <ul>
//             {products.map((producto) => (
//                 <li key={prodcuto.id}>{prodcuto.name}</li>
//             ))}
//          </ul>
//          <ItemList productos={products} />
//      </div>
// )
}

export default ItemListContainer;