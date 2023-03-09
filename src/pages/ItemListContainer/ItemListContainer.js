import ItemCount from '../../components/ItemCount/ItemCount'
import ItemList from '../../components/ItemList/ItemList'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';



const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState ([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams ()
    console.log(products)

    const getProducts = fetch('https://fakestoreapi.com/products', {
        method: 'GET',
        headers: {
            'content-type': 'json',
        }
    });

    // const getProducts = () => {
    //     fetch('https://fakestoreapi.com/products')
    //     .then((response) => response.json())
    //     .then((data) => setProducts(data))
    //     .catch((error) => console.log(error));
    // }

useEffect (() => {
    getProducts
    .then((res) =>{
        return res.json()
    })
    .then((response) => {
        setProducts (response)
    })
    .catch((error) => console.log(error))
}, []); 
    // useEffect(() => {
    //     getProducts();
    // }, []);

    useEffect (() => {
        if (category) {
            const removeCharacters= category.includes ('%20')
            ? category.replace('%20','')
            : category
            console.log(removeCharacters)
            const filteredProducts = products.fulter((product) => {
                return product.category === removeCharacters
            })
            setFilteredProducts (filteredProducts)
        }
    }, [category])

    return (
        <div>
            {greeting}
            <ItemCount />
            <ItemList productos={category ? filteredProducts : products} />
            <h1>Este es un producto especifico</h1>
        </div>
    )
}

export default ItemListContainer;