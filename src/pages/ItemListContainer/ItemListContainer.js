import ItemCount from '../../components/ItemCount/ItemCount'
import ItemList from '../../components/ItemList/ItemList'
import { useEffect, useState } from "react";
import { getFirestore, getDocs, collection } from 'firebase/firestore';



const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState ([])
    console.log(products)


    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.log(error));
    }


    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            {greeting}
            <ItemCount />
            <ItemList productos={products} />
        </div>
    )

 
}

export default ItemListContainer;