import React from "react";
import ProductCard from "./ProductCard";

interface Product {
    id: number;
    name: string;
    price: number;
    benefits: string;
    image: string;
}

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductList;
