import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/products";
import ItemContainer from "../components/ItemContainer";

const Category = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setProducts([]);
        setLoading(true);
        getProducts(categoryId)
            .then((items) => {
                setProducts(items);
                setLoading(false);
            })
            .catch((e) => console.log(e))
    }, [categoryId]);


    return (
        <>
            <div className="categoryContent">
                <h3>Vista de {categoryId}</h3>
            </div>
            <main className="mainContent">
                <ItemContainer products={products} loading={loading} />
            </main>
        </>
    )
}


export default Category