import React, { useState, useEffect } from 'react'
import Item from '../components/Item'
import { getProducts } from "../api/products"
import appContainer from '../style/appContainer.css'
import ItemContainer from '../components/ItemContainer'

const AppContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setProducts([]);
        setLoading(true);
        getProducts()
            .then((items) => {
                setProducts(items);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);


    return (
        <div className='products'>
            <ItemContainer products={products} loading={loading} />
        </div>
    )
}

export default AppContainer