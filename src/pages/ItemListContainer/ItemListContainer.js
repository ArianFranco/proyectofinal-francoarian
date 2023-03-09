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

    // const addProduct = fetch('https://fakestoreapi.com/products', {
    //     method: 'POST'
    //     body: JSON.stringify({
    //         title: 'test product',
    //         price: 13.5,
    //         description: 'lorem ipsum set',
    //         image: 'https://i.pracatar.cc',
    //         category: 'electronic'
    //     })
    // })


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

    useEffect (() => {
        if (category) {
            const removeCharacters= category.includes ('%20')
            ? category.replace('%20','')
            : category
            console.log(removeCharacters)
            const filteredProducts = products.filter((product) => {
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