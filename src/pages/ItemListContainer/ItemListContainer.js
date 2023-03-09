import ItemCount from '../../components/ItemCount/ItemCount'
import ItemList from '../../components/ItemList/ItemList'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';



const ItemListContainer = () => {
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
    setTimeout (() => {
        getProducts
        .then((res) =>{
            return res.json()
        })
        .then((response) => {
            setLoading(false)
            setProducts (response)
        })
        .catch((error) => console.log(error))
    }, 3000)

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
            {loading === true 
            ? <Loading/>
            : <ItemList productos={category ? filteredProducts : products} />
        }
        </div>
    )
}

export default ItemListContainer;