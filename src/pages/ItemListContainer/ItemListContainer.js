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

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.log(error));
    }


    useEffect(() => {
        getProducts()
        })

 
}

export default ItemListContainer;