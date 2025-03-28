import React from "react";
import { useCart } from "../context/CartContext";

interface ProductProps {
    id: number;
    name: string;
    price: number;
    benefits: string;
    image: string;
}

const ProductCard: React.FC<ProductProps> = ({ id, name, price, benefits, image }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({ id, name, price, quantity: 1 });
    };

    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />

            <h3>{name}</h3>
            <p>Price: Ksh {price}</p>
            <p>Benefits: {benefits}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
