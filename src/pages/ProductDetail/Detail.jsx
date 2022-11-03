import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProduct } from "../../api/products"
import "../../style/detail.css";
import Counter from '../../components/Counter';

const Detail = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct(productId).then((data) => {
            setProduct(data);
        });
    }, [productId]);

    return (
        <div className='content productDetail'>
            <img src={product?.imagen} alt={product?.nombre} />
            <div className='detail'>
                <span className='detailName'>{product?.nombre}</span>

                <span className="detailCategory">{product?.categoria}</span>
                <p className="detailDescription">{product?.descripcion}</p>
                <span className="detailPrice">
                    ${product?.precio?.toLocaleString()}
                </span>
                <span className="detailStock">
                    {product?.stock} disponibles
                </span>
                <Counter
                    stock={product?.stock}
                    onAdd={() => console.log("Agregando al carrito")}
                />
            </div>
        </div>
    )
}

export default Detail