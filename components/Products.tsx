import fetchproducts from './fetchproducts';

import React, { useEffect, useState } from 'react';

const Products: React.FC = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await fetchproducts();
            setProducts(result);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Products;