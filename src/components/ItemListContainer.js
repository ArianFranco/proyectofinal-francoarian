import { useEffect, useState } from "react";


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

const getProducs = async() =>await fetch('https://fakestoreapi.com/products')

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
//     <div>
//         {greeting}
//         <ItemCount />
//         <ItemList productos={products} />
//     </div>
// )
}

export default ItemListContainer;